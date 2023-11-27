import { ApolloClient, HttpLink, InMemoryCache, ApolloLink, concat } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

const { URI, TOKEN } = process.env;

/**
 * Creates an HTTP link for the Apollo Client to communicate with the GraphQL API.
 *
 * The `httpLink` is an instance of `HttpLink` from '@apollo/client', which is used to define the URI of the GraphQL endpoint.
 * This link is responsible for sending GraphQL operations over a HTTP connection.
 *
 * @param uri - The URI of the GraphQL endpoint, retrieved from an environment variable `URI`.
 *
 * The configuration object for `HttpLink` contains the `uri` property, which specifies the endpoint for the GraphQL API.
 * This HTTP link is later combined with other links (like authentication middleware) to form the complete link for the Apollo Client.
 *
 * @see HttpLink from '@apollo/client' for more details on HTTP link configuration.
 */
const httpLink = new HttpLink({
  uri: URI,
});

/**
 * Authentication middleware for Apollo Client to add an authorization token to GraphQL requests.
 *
 * The `authMiddleware` is an instance of `ApolloLink` that is used to modify the context of each GraphQL operation
 * by adding an authorization header. It checks for the presence of an `TOKEN` environment variable, and if available,
 * it adds a `Bearer` token to the authorization header of each request.
 *
 * @param TOKEN - The authorization token used for authenticating requests, retrieved from an environment variable `TOKEN`.
 *
 * This middleware intercepts each outgoing GraphQL operation and modifies its context by setting the authorization header.
 * This is essential for communicating with GraphQL APIs that require token-based authentication.
 *
 * @see ApolloLink from '@apollo/client' for creating custom middleware.
 */
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: TOKEN ? `Bearer ${TOKEN}` : '',
    },
  });
  return forward(operation);
});

/**
 * Registers and configures an Apollo Client instance for interacting with a GraphQL API.
 *
 * The `apolloClient` is created using `registerApolloClient` from '@apollo/experimental-nextjs-app-support/rsc',
 * specifically tailored for use in Next.js applications. The client is configured with a cache and a link that combines
 * the `authMiddleware` and `httpLink` to handle GraphQL operations.
 *
 * @returns The registered Apollo Client instance, ready for use in the application.
 *
 * The Apollo Client is instantiated with an `InMemoryCache` to manage local state and a concatenated link comprising
 * the authentication middleware and HTTP link. This setup ensures that each GraphQL request is properly authenticated
 * and sent to the configured URI.
 *
 * @see ApolloClient, InMemoryCache, concat from '@apollo/client', and registerApolloClient from '@apollo/experimental-nextjs-app-support/rsc'.
 */
const apolloClient = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      link: concat(authMiddleware, httpLink),
    }),
);

/**
 * Retrieves the registered Apollo Client instance.
 *
 * The `getClient` function is used to retrieve the registered Apollo Client instance from the `apolloClient` object.
 * This function is used in other parts of the application to execute GraphQL operations.
 *
 * @returns The registered Apollo Client instance.
 * @example const { data } = await getClient().query<TasksQuery>({ query: tasksQuery });
 *
 * @see getClient from '@apollo/experimental-nextjs-app-support/rsc'.
 */
const getApolloClient = apolloClient.getClient;

export { getApolloClient as getClient };

export default apolloClient;
