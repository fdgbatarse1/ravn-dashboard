'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface TabProps {
  text: string;
  icon: React.JSX.Element;
  href: string;
}

const Tab = ({ text, icon, href }: TabProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={clsx('flex place-items-center space-x-4 p-4 uppercase hover:text-primary-4', {
        'border-r-4 border-solid border-primary-4 bg-[linear-gradient(90deg,_rgba(186,_37,_37,_0.00)_0%,_rgba(210,_77,_77,_0.10)_100%)] text-primary-4':
          pathname === href,
      })}
    >
      {icon}
      <p>{text}</p>
    </Link>
  );
};

export default Tab;
