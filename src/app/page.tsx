import NavigationBar from '@/components/navbar';
import TopBar from '@/components/topbar/topbar';
import Board from '@/components/board';

const Home = () => (
  <div className="flex flex-col space-y-8 bg-neutral-5">
    <NavigationBar />
    <TopBar />
    <Board />
  </div>
);

export default Home;
