'use server';

import getClient from '@/lib/ApolloClient';

import { DeleteTaskInput, DeleteTaskMutation } from '@/gql/graphql';
import ErrorType from '@/data/enums/error';

import deleteTaskMutation from '../gql/deleteTaskMutation';

const deleteTask = async (input: DeleteTaskInput) => {
  try {
    console.log('deleteTask', input);
    const res = await getClient().mutate<DeleteTaskMutation>({
      mutation: deleteTaskMutation,
      variables: input,
    });
    return res.data;
  } catch (e) {
    throw new Error(ErrorType.DeleteTask);
  }
};

export default deleteTask;
