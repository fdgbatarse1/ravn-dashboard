'use server';

import getClient from '@/lib/ApolloClient';

import { TasksQuery } from '@/gql/graphql';
import ErrorType from '@/data/enums/error';

import tasksQuery from '../gql/tasksQuery';

const getTasks = async () => {
  try {
    console.log('getTasks');
    const { data } = await getClient().query<TasksQuery>({ query: tasksQuery });
    return data;
  } catch {
    throw new Error(ErrorType.GetTasks);
  }
};

export default getTasks;
