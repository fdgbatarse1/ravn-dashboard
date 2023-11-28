import { gql } from '@apollo/client';

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

export default deleteTaskMutation;
