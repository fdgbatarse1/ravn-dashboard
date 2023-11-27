import { RiLoaderFill } from 'react-icons/ri';

const Loading = () => (
  <section className="flex h-full w-full flex-col items-center justify-center space-y-8 text-center text-body-l font-semibold md:text-display-xs">
    <RiLoaderFill className="h-12 w-12 animate-spin text-neutral-2" />
  </section>
);

export default Loading;
