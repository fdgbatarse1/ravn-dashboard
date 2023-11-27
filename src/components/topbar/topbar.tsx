'use client';

import { usePathname } from 'next/navigation';
import { RiAddLine } from 'react-icons/ri';
import clsx from 'clsx';

import Link from 'next/link';

import Button from '@/components/button';

import switcher from './switcher';

const TopBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between">
      <div className="flex">
        {switcher.map(({ Icon, key, path }) => (
          <Button
            key={key}
            onClick={() => console.log(key)}
            className={clsx({
              'border border-solid border-primary-4 text-primary-4': pathname === path,
              'text-neutral-1 hover:text-primary-4': pathname !== path,
            })}
          >
            {Icon}
          </Button>
        ))}
      </div>
      <Link href="?modal=true">
        <Button className="bg-primary-4 text-neutral-1">
          <RiAddLine size="24px" />
        </Button>
      </Link>
    </div>
  );
};

export default TopBar;
