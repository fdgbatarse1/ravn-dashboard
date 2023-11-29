import { TasksQuery } from '@/gql/graphql';
import columnName from '@/utils/columnName';

import Card from './card';

interface ColumnProps {
  name: string;
  tasks: TasksQuery['tasks'];
  selectedCard: string | null;
  updateSelectedCard: (id: string) => void;
}

const Column = ({ name, tasks, selectedCard, updateSelectedCard }: ColumnProps) => {
  const formattedColumnName = columnName(name, tasks.length);
  tasks.sort((a, b) => a.position - b.position);
  return (
    <section className="flex h-full w-96 flex-col space-y-4 bg-neutral-5">
      <h3 className="text-body-l font-semibold capitalize text-neutral-1">{formattedColumnName}</h3>
      {tasks.map((task) => (
        <Card
          key={task.id}
          task={task}
          selectedCard={selectedCard}
          updateSelectedCard={updateSelectedCard}
        />
      ))}
    </section>
  );
};

export default Column;
