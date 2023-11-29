'use server';

import getClient from '@/lib/ApolloClient';

import { UpdateTaskInput, UpdateTaskMutation } from '@/gql/graphql';
import ErrorType from '@/data/enums/error';

import updateTaskMutation from '../gql/updateTaskMutation';

const updateTask = async (input: UpdateTaskInput) => {
  try {
    const res = await getClient().mutate<UpdateTaskMutation>({
      mutation: updateTaskMutation,
      variables: input,
    });
    return res.data;
  } catch (e) {
    throw new Error(ErrorType.UpdateTask);
  }
};

export default updateTask;
