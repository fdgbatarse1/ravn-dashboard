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
      className={clsx(
        'flex w-full place-items-center justify-center space-x-4 py-2 uppercase text-neutral-2 hover:text-primary-4 sm:p-4 md:justify-start',
        {
          'text-primary-4 md:border-r-4 md:border-solid md:border-primary-4 md:bg-[linear-gradient(90deg,_rgba(186,_37,_37,_0.00)_0%,_rgba(210,_77,_77,_0.10)_100%)]':
            pathname === href,
        },
      )}
    >
      <span className="hidden sm:block">{icon}</span>
      <p>{text}</p>
    </Link>
  );
};

export default Tab;
