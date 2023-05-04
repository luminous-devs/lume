import { Image } from '@lume/shared/image';
import { DEFAULT_AVATAR } from '@lume/stores/constants';

export default function ActiveAccount({ user }: { user: any }) {
  const userData = JSON.parse(user.metadata);

  return (
    <button className="relative h-11 w-11 rounded-lg">
      <Image
        src={userData.picture || DEFAULT_AVATAR}
        alt="user's avatar"
        className="h-11 w-11 rounded-lg object-cover"
      />
    </button>
  );
}
