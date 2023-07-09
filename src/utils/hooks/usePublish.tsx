import { NDKEvent, NDKKind, NDKPrivateKeySigner } from '@nostr-dev-kit/ndk';

import { useNDK } from '@libs/ndk/provider';

import { useAccount } from '@utils/hooks/useAccount';

export function usePublish() {
  const { ndk } = useNDK();
  const { account } = useAccount();

  const publish = async ({
    content,
    kind,
    tags,
  }: {
    content: string;
    kind: NDKKind;
    tags: string[][];
  }): Promise<NDKEvent> => {
    const event = new NDKEvent(ndk);
    const signer = new NDKPrivateKeySigner(account.privkey);

    event.content = content;
    event.kind = kind;
    event.created_at = Math.floor(Date.now() / 1000);
    event.pubkey = account.pubkey;
    event.tags = tags;

    await event.sign(signer);
    await event.publish();

    return event;
  };

  return publish;
}
