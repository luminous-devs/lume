import NDK, {
  NDKEvent,
  NDKFilter,
  NDKKind,
  NDKNip46Signer,
  NDKPrivateKeySigner,
  NDKSubscriptionCacheUsage,
  NDKTag,
  NDKUser,
  NostrEvent,
} from '@nostr-dev-kit/ndk';
import { ndkAdapter } from '@nostr-fetch/adapter-ndk';
import { invoke } from '@tauri-apps/api/primitives';
import { open } from '@tauri-apps/plugin-dialog';
import { readBinaryFile } from '@tauri-apps/plugin-fs';
import { Platform } from '@tauri-apps/plugin-os';
import Database from '@tauri-apps/plugin-sql';
import { NostrEventExt, NostrFetcher, normalizeRelayUrlSet } from 'nostr-fetch';
import { toast } from 'sonner';

import { NDKCacheAdapterTauri } from '@libs/ark';

import {
  Account,
  NDKCacheUser,
  NDKCacheUserProfile,
  NDKEventWithReplies,
  NIP05,
  Widget,
} from '@utils/types';

export class Ark {
  #ndk: NDK;
  #fetcher: NostrFetcher;
  #storage: Database;
  public account: Account | null;
  public relays: string[] | null;
  public readyToSign: boolean;
  readonly platform: Platform | null;
  readonly settings: {
    autoupdate: boolean;
    outbox: boolean;
    media: boolean;
    hashtag: boolean;
  };

  constructor({ storage }: { storage: Database }) {
    this.#storage = storage;
    this.#init();
  }

  async #keyring_save(key: string, value: string) {
    return await invoke('secure_save', { key, value });
  }

  async #keyring_load(key: string) {
    try {
      const value: string = await invoke('secure_load', { key });
      if (!value) return null;
      return value;
    } catch {
      return null;
    }
  }

  async #keyring_remove(key: string) {
    return await invoke('secure_remove', { key });
  }

  async #initNostrSigner({ nsecbunker }: { nsecbunker?: boolean }) {
    if (!this.account) {
      this.readyToSign = false;
      return null;
    }

    try {
      // NIP-46 Signer
      if (nsecbunker) {
        const localSignerPrivkey = await this.#keyring_load(
          `${this.account.pubkey}-nsecbunker`
        );

        if (!localSignerPrivkey) {
          this.readyToSign = false;
          return null;
        }

        const localSigner = new NDKPrivateKeySigner(localSignerPrivkey);
        const bunker = new NDK({
          explicitRelayUrls: ['wss://relay.nsecbunker.com', 'wss://nostr.vulpem.com'],
        });
        bunker.connect();

        const remoteSigner = new NDKNip46Signer(bunker, this.account.id, localSigner);
        await remoteSigner.blockUntilReady();

        this.readyToSign = true;
        return remoteSigner;
      }

      // Privkey Signer
      const userPrivkey = await this.#keyring_load(this.account.pubkey);

      if (!userPrivkey) {
        this.readyToSign = false;
        return null;
      }

      this.readyToSign = true;
      return new NDKPrivateKeySigner(userPrivkey);
    } catch (e) {
      console.log(e);
      if (e === 'Token already redeemed') {
        toast.info(
          'nsecbunker token already redeemed. You need to re-login with another token.'
        );
        await this.logout();
      }

      this.readyToSign = false;
      return null;
    }
  }

  async #init() {
    const outboxSetting = await this.getSettingValue('outbox');
    const bunkerSetting = await this.getSettingValue('nsecbunker');

    const bunker = !!parseInt(bunkerSetting);
    const enableOutboxModel = !!parseInt(outboxSetting);

    const explicitRelayUrls = normalizeRelayUrlSet([
      'wss://relay.damus.io',
      'wss://relay.nostr.band',
      'wss://nos.lol',
      'wss://nostr.mutinywallet.com',
    ]);

    // #TODO: user should config outbox relays
    const outboxRelayUrls = normalizeRelayUrlSet(['wss://purplepag.es']);

    // #TODO: user should config blacklist relays
    const blacklistRelayUrls = normalizeRelayUrlSet(['wss://brb.io']);

    const cacheAdapter = new NDKCacheAdapterTauri(this.#storage);
    const ndk = new NDK({
      cacheAdapter,
      explicitRelayUrls,
      outboxRelayUrls,
      blacklistRelayUrls,
      enableOutboxModel,
      autoConnectUserRelays: true,
      autoFetchUserMutelist: true,
      // clientName: 'Lume',
      // clientNip89: '',
    });

    // add signer if exist
    const signer = await this.#initNostrSigner({ nsecbunker: bunker });
    if (signer) ndk.signer = signer;

    // connect
    await ndk.connect();
    const fetcher = NostrFetcher.withCustomPool(ndkAdapter(ndk));

    // update account's metadata
    if (this.account) {
      const user = ndk.getUser({ pubkey: this.account.pubkey });
      ndk.activeUser = user;

      const contacts = await user.follows(undefined /* outbox */);
      this.account.contacts = [...contacts].map((user) => user.pubkey);
    }

    this.#ndk = ndk;
    this.#fetcher = fetcher;
  }

  public updateNostrSigner({ signer }: { signer: NDKNip46Signer | NDKPrivateKeySigner }) {
    this.#ndk.signer = signer;
    return this.#ndk.signer;
  }

  public async getAllCacheUsers() {
    const results: Array<NDKCacheUser> = await this.#storage.select(
      'SELECT * FROM ndk_users ORDER BY createdAt DESC;'
    );

    if (!results.length) return [];

    const users: NDKCacheUserProfile[] = results.map((item) => ({
      pubkey: item.pubkey,
      ...JSON.parse(item.profile as string),
    }));
    return users;
  }

  public async checkAccount() {
    const result: Array<{ total: string }> = await this.#storage.select(
      'SELECT COUNT(*) AS "total" FROM accounts WHERE is_active = "1" ORDER BY id DESC LIMIT 1;'
    );
    return parseInt(result[0].total);
  }

  public async getActiveAccount() {
    const results: Array<Account> = await this.#storage.select(
      'SELECT * FROM accounts WHERE is_active = "1" ORDER BY id DESC LIMIT 1;'
    );

    if (results.length) {
      this.account = results[0];
      this.account.contacts = [];
    } else {
      console.log('no active account, please create new account');
      return null;
    }
  }

  public async createAccount(npub: string, pubkey: string, privkey?: string) {
    const existAccounts: Array<Account> = await this.#storage.select(
      'SELECT * FROM accounts WHERE pubkey = $1 ORDER BY id DESC LIMIT 1;',
      [pubkey]
    );

    if (existAccounts.length) {
      await this.#storage.execute(
        "UPDATE accounts SET is_active = '1' WHERE pubkey = $1;",
        [pubkey]
      );
    } else {
      await this.#storage.execute(
        'INSERT OR IGNORE INTO accounts (id, pubkey, is_active) VALUES ($1, $2, $3);',
        [npub, pubkey, 1]
      );

      if (privkey) await this.#keyring_save(pubkey, privkey);
    }

    return await this.getActiveAccount();
  }

  /**
   * Save private key to OS secure storage
   * @deprecated this method will be marked as private in the next update
   */
  public async createPrivkey(name: string, privkey: string) {
    await this.#keyring_save(name, privkey);
  }

  public async updateAccount(column: string, value: string) {
    const insert = await this.#storage.execute(
      `UPDATE accounts SET ${column} = $1 WHERE id = $2;`,
      [value, this.account.id]
    );

    if (insert) {
      const account = await this.getActiveAccount();
      return account;
    }
  }

  public async getWidgets() {
    const widgets: Array<Widget> = await this.#storage.select(
      'SELECT * FROM widgets WHERE account_id = $1 ORDER BY created_at DESC;',
      [this.account.id]
    );
    return widgets;
  }

  public async createWidget(kind: number, title: string, content: string | string[]) {
    const insert = await this.#storage.execute(
      'INSERT INTO widgets (account_id, kind, title, content) VALUES ($1, $2, $3, $4);',
      [this.account.id, kind, title, content]
    );

    if (insert) {
      const widgets: Array<Widget> = await this.#storage.select(
        'SELECT * FROM widgets ORDER BY id DESC LIMIT 1;'
      );
      if (widgets.length < 1) console.error('get created widget failed');
      return widgets[0];
    } else {
      console.error('create widget failed');
    }
  }

  public async removeWidget(id: string) {
    const res = await this.#storage.execute('DELETE FROM widgets WHERE id = $1;', [id]);
    if (res) return id;
  }

  public async createSetting(key: string, value: string | undefined) {
    if (value) {
      return await this.#storage.execute(
        'INSERT OR IGNORE INTO settings (key, value) VALUES ($1, $2);',
        [key, value]
      );
    }

    const currentSetting = await this.checkSettingValue(key);

    if (!currentSetting)
      return await this.#storage.execute(
        'INSERT OR IGNORE INTO settings (key, value) VALUES ($1, $2);',
        [key, value]
      );

    const currentValue = !!parseInt(currentSetting);

    return await this.#storage.execute('UPDATE settings SET value = $1 WHERE key = $2;', [
      +!currentValue,
      key,
    ]);
  }

  public async getAllSettings() {
    const results: { key: string; value: string }[] = await this.#storage.select(
      'SELECT * FROM settings ORDER BY id DESC;'
    );
    if (results.length < 1) return null;
    return results;
  }

  public async checkSettingValue(key: string) {
    const results: { key: string; value: string }[] = await this.#storage.select(
      'SELECT * FROM settings WHERE key = $1 ORDER BY id DESC LIMIT 1;',
      [key]
    );
    if (!results.length) return false;
    return results[0].value;
  }

  public async getSettingValue(key: string) {
    const results: { key: string; value: string }[] = await this.#storage.select(
      'SELECT * FROM settings WHERE key = $1 ORDER BY id DESC LIMIT 1;',
      [key]
    );
    if (!results.length) return '0';
    return results[0].value;
  }

  public async clearCache() {
    await this.#storage.execute('DELETE FROM ndk_events;');
    await this.#storage.execute('DELETE FROM ndk_eventtags;');
    await this.#storage.execute('DELETE FROM ndk_users;');
  }

  public async logout() {
    await this.#storage.execute("UPDATE accounts SET is_active = '0' WHERE id = $1;", [
      this.account.id,
    ]);
    await this.#keyring_remove(this.account.pubkey);
    await this.#keyring_remove(`${this.account.pubkey}-nsecbunker`);

    this.account = null;
    this.#ndk.signer = null;
  }

  public subscribe({
    filter,
    closeOnEose = false,
    cb,
  }: {
    filter: NDKFilter;
    closeOnEose: boolean;
    cb: (event: NDKEvent) => void;
  }) {
    const sub = this.#ndk.subscribe(filter, { closeOnEose });
    sub.addListener('event', (event: NDKEvent) => cb(event));
    return sub;
  }

  public createNDKEvent({ event }: { event: NostrEvent | NostrEventExt }) {
    return new NDKEvent(this.#ndk, event);
  }

  public async createEvent({
    kind,
    tags,
    content,
    publish,
  }: {
    kind: NDKKind | number;
    tags: NDKTag[];
    content?: string;
    publish?: boolean;
  }) {
    try {
      const event = new NDKEvent(this.#ndk);
      if (content) event.content = content;
      event.kind = kind;
      event.tags = tags;

      if (!publish) {
        const publish = await event.publish();
        if (!publish) throw new Error('cannot publish error');
        return publish.size;
      }

      return event;
    } catch (e) {
      throw new Error(e);
    }
  }

  public async getUserProfile({ pubkey }: { pubkey: string }) {
    try {
      const user = this.#ndk.getUser({ pubkey });
      const profile = await user.fetchProfile({
        cacheUsage: NDKSubscriptionCacheUsage.CACHE_FIRST,
      });

      if (!profile) return null;
      return profile;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  public async getUserContacts({
    pubkey = undefined,
    outbox = undefined,
  }: {
    pubkey?: string;
    outbox?: boolean;
  }) {
    try {
      const user = this.#ndk.getUser({ pubkey: pubkey ? pubkey : this.account.pubkey });
      const contacts = [...(await user.follows(undefined, outbox))].map(
        (user) => user.pubkey
      );

      this.account.contacts = contacts;
      return contacts;
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  public async getUserRelays({ pubkey }: { pubkey?: string }) {
    try {
      const user = this.#ndk.getUser({ pubkey: pubkey ? pubkey : this.account.pubkey });
      return await user.relayList();
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  public async createContact({ pubkey }: { pubkey: string }) {
    const user = this.#ndk.getUser({ pubkey: this.account.pubkey });
    const contacts = await user.follows();
    return await user.follow(new NDKUser({ pubkey: pubkey }), contacts);
  }

  public async deleteContact({ pubkey }: { pubkey: string }) {
    const user = this.#ndk.getUser({ pubkey: this.account.pubkey });
    const contacts = await user.follows();
    return await user.follow(new NDKUser({ pubkey: pubkey }), contacts);
  }

  public async getAllEvents({ filter }: { filter: NDKFilter }) {
    const events = await this.#ndk.fetchEvents(filter);
    if (!events) return [];
    return [...events];
  }

  public async getEventById({ id }: { id: string }) {
    const event = await this.#ndk.fetchEvent(id, {
      cacheUsage: NDKSubscriptionCacheUsage.CACHE_FIRST,
    });

    if (!event) return null;
    return event;
  }

  public getEventThread({ tags }: { tags: NDKTag[] }) {
    let rootEventId: string = null;
    let replyEventId: string = null;

    const events = tags.filter((el) => el[0] === 'e');

    if (!events.length) return null;

    if (events.length === 1)
      return {
        rootEventId: events[0][1],
        replyEventId: null,
      };

    if (events.length > 1) {
      rootEventId = events.find((el) => el[3] === 'root')?.[1];
      replyEventId = events.find((el) => el[3] === 'reply')?.[1];

      if (!rootEventId && !replyEventId) {
        rootEventId = events[0][1];
        replyEventId = events[1][1];
      }
    }

    return {
      rootEventId,
      replyEventId,
    };
  }

  public async getThreads({ id, data }: { id: string; data?: NDKEventWithReplies[] }) {
    let events = data || null;

    if (!data) {
      const relayUrls = [...this.#ndk.pool.relays.values()].map((item) => item.url);
      const rawEvents = (await this.#fetcher.fetchAllEvents(
        relayUrls,
        {
          kinds: [NDKKind.Text],
          '#e': [id],
        },
        { since: 0 },
        { sort: true }
      )) as unknown as NostrEvent[];
      events = rawEvents.map(
        (event) => new NDKEvent(this.#ndk, event)
      ) as NDKEvent[] as NDKEventWithReplies[];
    }

    if (events.length > 0) {
      const replies = new Set();
      events.forEach((event) => {
        const tags = event.tags.filter((el) => el[0] === 'e' && el[1] !== id);
        if (tags.length > 0) {
          tags.forEach((tag) => {
            const rootIndex = events.findIndex((el) => el.id === tag[1]);
            if (rootIndex !== -1) {
              const rootEvent = events[rootIndex];
              if (rootEvent && rootEvent.replies) {
                rootEvent.replies.push(event);
              } else {
                rootEvent.replies = [event];
              }
              replies.add(event.id);
            }
          });
        }
      });
      const cleanEvents = events.filter((ev) => !replies.has(ev.id));
      return cleanEvents;
    }

    return events;
  }

  public async getInfiniteEvents({
    filter,
    limit,
    pageParam = 0,
    signal = undefined,
  }: {
    filter: NDKFilter;
    limit: number;
    pageParam?: number;
    signal?: AbortSignal;
  }) {
    const rootIds = new Set();
    const dedupQueue = new Set();

    const events = await this.#fetcher.fetchLatestEvents(this.relays, filter, limit, {
      asOf: pageParam === 0 ? undefined : pageParam,
      abortSignal: signal,
    });

    const ndkEvents = events.map((event) => {
      return new NDKEvent(this.#ndk, event);
    });

    ndkEvents.forEach((event) => {
      const tags = event.tags.filter((el) => el[0] === 'e');
      if (tags && tags.length > 0) {
        const rootId = tags.filter((el) => el[3] === 'root')[1] ?? tags[0][1];
        if (rootIds.has(rootId)) return dedupQueue.add(event.id);
        rootIds.add(rootId);
      }
    });

    return ndkEvents
      .filter((event) => !dedupQueue.has(event.id))
      .sort((a, b) => b.created_at - a.created_at);
  }

  /**
   * Upload media file to nostr.build
   * @todo support multiple backends
   */
  public async upload({ fileExts }: { fileExts?: string[] }) {
    const defaultExts = ['png', 'jpeg', 'jpg', 'gif'].concat(fileExts);

    const selected = await open({
      multiple: false,
      filters: [
        {
          name: 'Image',
          extensions: defaultExts,
        },
      ],
    });

    if (!selected) return null;

    const file = await readBinaryFile(selected.path);
    const blob = new Blob([file]);

    const data = new FormData();
    data.append('fileToUpload', blob);
    data.append('submit', 'Upload Image');

    const res = await fetch('https://nostr.build/api/v2/upload/files', {
      method: 'POST',
      body: data,
    });

    if (!res.ok) return null;

    const json = await res.json();
    const content = json.data[0];

    return content.url as string;
  }

  public async validateNIP05({
    pubkey,
    nip05,
    signal,
  }: {
    pubkey: string;
    nip05: string;
    signal?: AbortSignal;
  }) {
    const localPath = nip05.split('@')[0];
    const service = nip05.split('@')[1];
    const verifyURL = `https://${service}/.well-known/nostr.json?name=${localPath}`;

    const res = await fetch(verifyURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      signal,
    });

    if (!res.ok) throw new Error(`Failed to fetch NIP-05 service: ${nip05}`);

    const data: NIP05 = await res.json();
    if (data.names) {
      if (data.names[localPath.toLowerCase()] !== pubkey) return false;
      if (data.names[localPath] !== pubkey) return false;
      return true;
    }
    return false;
  }
}
