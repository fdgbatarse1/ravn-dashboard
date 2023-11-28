'use server';

import getClient from '@/lib/ApolloClient';

import { UsersQuery } from '@/gql/graphql';
import ErrorType from '@/data/enums/error';
import usersQuery from './gql/usersQuery';

const getUsers = async () => {
  try {
    console.log('getUsers');
    const { data } = await getClient().query<UsersQuery>({ query: usersQuery });
    return data;
  } catch {
    throw new Error(ErrorType.GetUsers);
  }
};

export default getUsers;
