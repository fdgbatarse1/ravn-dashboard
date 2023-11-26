import Avatar from './avatar';

import type { AvatarProps } from './avatar';

interface UserProps extends AvatarProps {
  text: string;
}

const User = ({ src, alt, className, text }: UserProps) => (
  <div className="flex items-center space-x-2 px-4 py-1">
    <Avatar src={src} alt={alt} className={className} />
    <p className="text-body-m text-neutral-1">{text}</p>
  </div>
);

export default User;
