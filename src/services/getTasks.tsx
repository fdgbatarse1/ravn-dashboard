'use server';

import { getClient } from '@/lib/ApolloClient';
import { gql } from '@apollo/client';

import { TasksQuery } from '@/gql/graphql';
import ErrorType from '@/data/enums/error';

const tasksQuery = gql`
  query tasks {
    tasks(input: {}) {
      assignee {
        avatars
      }
      dueDate
      id
      name
      pointEstimate
      position
      status
      tags
    }
  }
`;

const getTasks = async () => {
  try {
    const { data } = await getClient().query<TasksQuery>({ query: tasksQuery });
    return data;
  } catch {
    throw new Error(ErrorType.GetTasks);
  }
};

export default getTasks;
