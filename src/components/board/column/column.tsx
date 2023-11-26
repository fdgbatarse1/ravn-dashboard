import { TasksQuery } from '@/gql/graphql';

import Card from './card';

interface ColumnProps {
  text: string;
  tasks: TasksQuery['tasks'];
}

const Column = ({ text, tasks }: ColumnProps) => (
  <section className="flex h-full w-96 flex-col space-y-4 bg-neutral-5">
    <h3 className="text-body-l font-semibold capitalize text-neutral-1">{text}</h3>
    {tasks.map((task) => (
      <Card key={task.id} />
    ))}
  </section>
);

export default Column;
