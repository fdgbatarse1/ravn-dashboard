import NavigationBar from '@/components/navbar';
import TopBar from '@/components/topbar/topbar';
import Board from '@/components/board';

// import getTasks from '@/services/getTasks';
import TasksQueryMock from '@/data/mocks/TasksQueryMock';

const Home = async () => {
  // const data = await getTasks();
  const data = TasksQueryMock;
  return (
    <div className="flex flex-col space-y-8 bg-neutral-5">
      <NavigationBar />
      <TopBar />
      <Board data={data} />
    </div>
  );
};

export default Home;
