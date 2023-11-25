import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  className: string;
}

const Avatar = ({ src, alt, className }: AvatarProps) => (
  <div className={`${className} relative rounded-full`}>
    <Image src={src} alt={alt} className="rounded-full" objectFit="cover" fill />
  </div>
);

export default Avatar;
