import { NoteBase } from '@components/note/base';
import { RelayContext } from '@components/relaysProvider';

import { DEFAULT_RELAYS } from '@stores/constants';

import { Author } from 'nostr-relaypool';
import { useContext, useEffect, useState } from 'react';

export default function ProfileNotes({ id }: { id: string }) {
  const pool: any = useContext(RelayContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const user = new Author(pool, DEFAULT_RELAYS, id);
    user.text((res) => setData((data) => [...data, res]), 100, 0);
  }, [id, pool]);

  return (
    <div className="flex flex-col">
      {data.map((item) => (
        <div key={item.id}>
          <NoteBase event={item} />
        </div>
      ))}
    </div>
  );
}
