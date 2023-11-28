'use server';

import getClient from '@/lib/ApolloClient';
import { gql } from '@apollo/client';

import { UsersQuery } from '@/gql/graphql';
import ErrorType from '@/data/enums/error';

const usersQuery = gql`
  query users {
    users {
      id
      avatar
      fullName
    }
  }
`;

const getUsers = async () => {
  try {
    const { data } = await getClient().query<UsersQuery>({ query: usersQuery });
    return data;
  } catch {
    throw new Error(ErrorType.GetUsers);
  }
};

export default getUsers;
