import { gql } from '@apollo/client';

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

export default tasksQuery;
