'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import Button from '@/components/button';
import Cross from '@/assets/svg/cross';

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
            className={clsx('hover:text-primary-4', {
              'border border-solid border-primary-4 text-primary-4': pathname === path,
            })}
          >
            <Icon fill="currentColor" size={24} />
          </Button>
        ))}
      </div>
      <Button onClick={() => console.log(1)} className="bg-primary-4">
        <Cross />
      </Button>
    </div>
  );
};

export default TopBar;
