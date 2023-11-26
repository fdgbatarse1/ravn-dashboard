import Column from '@/components/column/column';

import columns from './columns';

const Board = () => (
  <div className="flex-grow overflow-auto">
    <section className="flex w-fit flex-row space-x-4">
      {columns.map(({ name }) => (
        <Column text={name} key={name} />
      ))}
    </section>
  </div>
);

export default Board;
