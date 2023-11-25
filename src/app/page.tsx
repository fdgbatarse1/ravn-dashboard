import Column from '@/components/column/column';
import NavigationBar from '@/components/navbar';
import TopBar from '@/components/topbar/topbar';

const Home = () => (
  <div className="flex flex-col space-y-8">
    <NavigationBar />
    <TopBar />
    <section className="flex space-x-8">
      <Column text={`To Do (${3})`} />
      <Column text="To Do" />
    </section>
  </div>
);

export default Home;
