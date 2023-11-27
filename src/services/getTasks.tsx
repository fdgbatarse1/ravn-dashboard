'use server';

import { getClient } from '@/lib/ApolloClient';
import { gql } from '@apollo/client';

import { TasksQuery } from '@/gql/graphql';

const tasksQuery = gql`
  query tasks {
    tasks(input: {}) {
      assignee {
        avatar
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
  const { data } = await getClient().query<TasksQuery>({ query: tasksQuery });
  return data;
};

export default getTasks;
