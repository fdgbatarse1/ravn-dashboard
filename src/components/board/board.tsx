'use client';

import { useState } from 'react';
import { TasksQuery } from '@/gql/graphql';
import groupBy from '@/utils/groupBy';

import Column from './column';

interface BoardProps {
  data: TasksQuery;
}

const Board = ({ data }: BoardProps) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const updateSelectedCard = (id: string) => {
    if (selectedCard === id) return setSelectedCard(null);
    return setSelectedCard(id);
  };

  if (!data.tasks.length) return <p>No Tasks Here Yet!</p>;

  const columns = groupBy({ array: data.tasks, fn: (task) => task.status });

  return (
    <div className="flex-grow overflow-auto">
      <section className="flex w-fit flex-row space-x-4">
        {Object.entries(columns).map(([key, value]) => (
          <Column
            key={key}
            selectedCard={selectedCard}
            updateSelectedCard={updateSelectedCard}
            name={key}
            tasks={value}
          />
        ))}
      </section>
    </div>
  );
};

export default Board;
