import Image from 'next/image';

import Cancel from '@/assets/svg/cancel';
import Bell from '@/assets/svg/bell';
import Search from '@/assets/svg/search';

const NavigationBar = () => (
  <form className="flex w-full flex-row rounded-2xl bg-neutral-4">
    <label htmlFor="search" aria-label="search" className="flex flex-grow flex-row space-x-6 p-6">
      <Search />
      <input
        id="search"
        type="text"
        placeholder="Search"
        className="w-full bg-transparent text-body-s text-neutral-2 focus-visible:outline-none md:text-body-m"
      />
    </label>
    <div className="hidden place-items-center py-3 pr-6 md:flex md:space-x-6">
      <Cancel />
      <Bell />
      <Image
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="User profile"
        width={40}
        height={40}
        className="max-w-10 h-auto max-h-10 w-auto [clip-path:_circle()]"
      />
    </div>
  </form>
);

export default NavigationBar;
