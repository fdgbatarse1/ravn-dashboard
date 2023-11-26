import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  className: string;
}

const Avatar = ({ src, alt, className }: AvatarProps) => (
  <div className={`${className} relative rounded-full`}>
    <Image
      src={src}
      alt={alt}
      className="rounded-full"
      style={{ objectFit: 'cover' }}
      sizes="5vw"
      fill
    />
  </div>
);

export type { AvatarProps };

export default Avatar;
