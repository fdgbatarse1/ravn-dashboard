import { gql } from '@apollo/client';

const usersQuery = gql`
  query users {
    users {
      id
      avatar
      fullName
    }
  }
`;

export default usersQuery;
