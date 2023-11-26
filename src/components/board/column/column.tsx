import { TasksQuery } from '@/gql/graphql';
import columnName from '@/utils/formatters/columnName';

import Card from './card';

interface ColumnProps {
  name: string;
  tasks: TasksQuery['tasks'];
}

const Column = ({ name, tasks }: ColumnProps) => {
  const formattedColumnName = columnName(name, tasks.length);
  return (
    <section className="flex h-full w-96 flex-col space-y-4 bg-neutral-5">
      <h3 className="text-body-l font-semibold capitalize text-neutral-1">{formattedColumnName}</h3>
      {tasks.map((task) => (
        <Card key={task.id} task={task} />
      ))}
    </section>
  );
};

export default Column;
