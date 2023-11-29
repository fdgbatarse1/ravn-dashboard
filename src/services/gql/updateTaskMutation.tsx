import { gql } from '@apollo/client';

const updateTaskMutation = gql`
  mutation updateTask(
    $assigneeId: String
    $id: String!
    $position: Float
    $dueDate: DateTime!
    $name: String!
    $pointEstimate: PointEstimate!
    $status: Status!
    $tags: [TaskTag!]!
  ) {
    updateTask(
      input: {
        assigneeId: $assigneeId
        id: $id
        position: $position
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

export default updateTaskMutation;
