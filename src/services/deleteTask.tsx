'use server';

import { getClient } from '@/lib/ApolloClient';
import { gql } from '@apollo/client';

import { DeleteTaskInput, DeleteTaskMutation } from '@/gql/graphql';
import ErrorType from '@/data/enums/error';

const deleteTaskMutation = gql`
  mutation deleteTask($id: String!) {
    deleteTask(input: { id: $id }) {
      assignee {
        avatar
        createdAt
        email
        fullName
        id
        type
        updatedAt
      }
      createdAt
      creator {
        avatar
        createdAt
        email
        fullName
        id
        type
        updatedAt
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

const deleteTask = async (input: DeleteTaskInput) => {
  try {
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
