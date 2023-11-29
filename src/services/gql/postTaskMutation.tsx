import { gql } from '@apollo/client';

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

export default postTaskMutation;
