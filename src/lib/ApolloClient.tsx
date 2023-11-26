import { ApolloClient, HttpLink, InMemoryCache, ApolloLink, concat } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

const { URI, TOKEN } = process.env;

const httpLink = new HttpLink({
  uri: URI,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: TOKEN ? `Bearer ${TOKEN}` : '',
    },
  });
  return forward(operation);
});

const apolloClient = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      link: concat(authMiddleware, httpLink),
    }),
);

const { getClient } = apolloClient;

export { getClient };

export default apolloClient;
