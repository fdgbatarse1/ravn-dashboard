import { UsersQuery } from '@/gql/graphql';

const Users: UsersQuery = {
  users: [
    {
      __typename: 'User',
      id: '703de395-1d49-4471-aafa-d990dcf32cd1',
      avatar: 'https://avatars.dicebear.com/api/initials/gs.svg',
      fullName: 'Grace Stone',
    },
    {
      __typename: 'User',
      id: 'a35d73eb-6829-4a92-ab82-43fe987ae02f',
      avatar: 'https://avatars.dicebear.com/api/initials/jd.svg',
      fullName: 'Jhon Doe',
    },
    {
      __typename: 'User',
      id: '885fe214-60ac-4860-80cc-9c58179c59b4',
      avatar: 'https://avatars.dicebear.com/api/initials/rb.svg',
      fullName: 'Romeo Barnes',
    },
    {
      __typename: 'User',
      id: '59580d8e-952a-41fa-920f-9290922c9bf5',
      avatar: null,
      fullName: 'Fernando Daniel González Batarsé',
    },
  ],
};

export default Users;
