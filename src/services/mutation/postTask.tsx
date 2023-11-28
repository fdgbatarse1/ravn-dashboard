'use server';

import getClient from '@/lib/ApolloClient';

import { CreateTaskInput, CreateTaskMutation } from '@/gql/graphql';
import ErrorType from '@/data/enums/error';

import postTaskMutation from '../gql/postTaskMutation';

const postTask = async (input: CreateTaskInput) => {
  console.log('postTask', input);
  try {
    const res = await getClient().mutate<CreateTaskMutation>({
      mutation: postTaskMutation,
      variables: input,
    });
    return res.data;
  } catch (e) {
    throw new Error(ErrorType.PostTask);
  }
};

export default postTask;
