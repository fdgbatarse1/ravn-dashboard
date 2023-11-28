'use server';

import getClient from '@/lib/ApolloClient';
import { gql } from '@apollo/client';

import { CreateTaskInput, CreateTaskMutation } from '@/gql/graphql';
import ErrorType from '@/data/enums/error';

const postTaskMutation = gql`
  mutation createTask(
    $assigneeId: String
    $dueDate: DateTime!
    $name: String!
    $pointEstimate: PointEstimate!
    $status: Status!
    $tags: [TaskTag!]!
  ) {
    createTask(
      input: {
        assigneeId: $assigneeId
        dueDate: $dueDate
        name: $name
        pointEstimate: $pointEstimate
        status: $status
        tags: $tags
      }
    ) {
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
