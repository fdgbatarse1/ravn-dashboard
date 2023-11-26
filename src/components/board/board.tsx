import { TasksQuery } from '@/gql/graphql';
import groupBy from '@/utils/groupBy';

import Column from './column';

interface BoardProps {
  data: TasksQuery;
}

const Board = ({ data }: BoardProps) => {
  const columns = groupBy({ array: data.tasks, fn: (task) => task.status });
  return (
    <div className="flex-grow overflow-auto">
      <section className="flex w-fit flex-row space-x-4">
        {Object.entries(columns).map(([key]) => (
          <Column key={key} text={key} />
        ))}
      </section>
    </div>
  );
};

export default Board;
