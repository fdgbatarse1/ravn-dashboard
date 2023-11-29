'use client';

import { usePathname, useRouter } from 'next/navigation';
import { RiAddLine } from 'react-icons/ri';
import clsx from 'clsx';

import Link from 'next/link';

import Button from '@/components/button';

import switcher from './switcher';

const TopBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="flex justify-between">
      <div className="flex">
        {switcher.map(({ Icon, key, path }) => (
          <Button
            key={key}
            onClick={() => router.push(path)}
            className={clsx({
              'border border-solid border-primary-4 text-primary-4': pathname === path,
              'text-neutral-1 hover:text-primary-4': pathname !== path,
            })}
          >
            {Icon}
          </Button>
        ))}
      </div>
      <Link href="?modal=true&type=create">
        <Button className="bg-primary-4 text-neutral-1">
          <RiAddLine size="24px" />
        </Button>
      </Link>
    </div>
  );
};

export default TopBar;
