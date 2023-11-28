import NavigationBar from '@/components/navbar';
import TopBar from '@/components/topbar';
import Board from '@/components/board';

import getTasks from '@/services/getTasks';

const Home = async () => {
  const data = await getTasks();
  return (
    <div className="flex flex-col space-y-8 bg-neutral-5">
      <NavigationBar />
      <TopBar />
      <Board data={data} />
    </div>
  );
};

export default Home;
