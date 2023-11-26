import NavigationBar from '@/components/navbar';
import TopBar from '@/components/topbar/topbar';
import Board from '@/components/board';

import getTasks from '@/services/getTasks';

const Home = async () => {
  const tasks = await getTasks();
  console.log(tasks);
  return (
    <div className="flex flex-col space-y-8 bg-neutral-5">
      <NavigationBar />
      <TopBar />
      <Board />
    </div>
  );
};

export default Home;
