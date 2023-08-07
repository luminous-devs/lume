import { Body, fetch } from '@tauri-apps/plugin-http';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@shared/button';
import { LoaderIcon } from '@shared/icons';

import { useOnboarding } from '@stores/onboarding';

import { useAccount } from '@utils/hooks/useAccount';
import { usePublish } from '@utils/hooks/usePublish';

export function CreateStep4Screen() {
  const navigate = useNavigate();
  const profile = useOnboarding((state) => state.profile);

  const { publish } = usePublish();
  const { account } = useAccount();

  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const createNIP05 = async () => {
    try {
      setLoading(true);

      const response = await fetch('https://lume.nu/api/user-create', {
        method: 'POST',
        timeout: 30,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: Body.json({
          username: username,
          pubkey: account.pubkey,
          lightningAddress: '',
        }),
      });

      if (response.ok) {
        const data = { ...profile, nip05: `${username}@lume.nu` };
        publish({ content: JSON.stringify(data), kind: 0, tags: [] });

        // redirect to step 4
        navigate('/auth/create/step-5', { replace: true });
      }
    } catch (error) {
      setLoading(false);
      console.error('Error:', error);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="mb-8 text-center">
        <h1 className="text-xl font-semibold text-white">Create your Lume ID</h1>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <div className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white/10">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoCapitalize="false"
            autoCorrect="none"
            spellCheck="false"
            placeholder="satoshi"
            className="relative h-11 w-full bg-transparent py-1 pl-3.5 text-white !outline-none placeholder:text-white/50"
          />
          <span className="pr-3.5 font-semibold text-fuchsia-500">@lume.nu</span>
        </div>
        <Button
          preset="large"
          onClick={() => createNIP05()}
          disabled={username.length === 0}
        >
          {loading ? (
            <LoaderIcon className="h-4 w-4 animate-spin text-black dark:text-white" />
          ) : (
            'Continue →'
          )}
        </Button>
      </div>
    </div>
  );
}
