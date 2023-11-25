import Link from 'next/link';

import Dashboard from '@/assets/svg/dashboard';
import Ravn from '@/assets/svg/ravn';

import Tab from './tab';

const Sidebar = () => (
  <div className="flex h-full flex-col rounded-3xl bg-neutral-4 py-3 md:space-y-11">
    <Link href="https://www.ravn.co/" className="self-center">
      <Ravn fill="white" size={40} />
    </Link>
    <div className="flex text-center text-body-s text-neutral-2 md:flex-col md:text-start md:text-body-m">
      <Tab text="dashboard" href="/" icon={<Dashboard fill="currentColor" />} />
    </div>
  </div>
);

export default Sidebar;
