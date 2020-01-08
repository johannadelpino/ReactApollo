import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  gql,
  useQuery,
} from '@apollo/client';
import { ApolloLink } from 'apollo-link';
import { appResolvers, appDefinitions } from './resolvers/app-resolvers';
import { userResolvers, userDefinitions } from './resolvers/user-resolvers';
import StoreDefaultState from './store-default-state';

/**
 * Root Definitions
 */

const rootDefinitions = gql`
  extend type Query {
    app: App!
    user: User!
  }
  ${appDefinitions}
  ${userDefinitions}
`;

/**
 * Root Resolvers
 */
const rootResolvers = {
  app: { ...appResolvers },
  user: { ...userResolvers },
};

/**
 * Apollo client for application state management
 */

const store = new InMemoryCache();
store.writeData({ data: StoreDefaultState });

const apolloStoreClientConfig = {
  cache: store,
  link: ApolloLink.from([
    new HttpLink({
      uri: '',
    }),
  ]),
  typeDefs: rootDefinitions,
  resolvers: rootResolvers,
};

const apolloStoreClient = new ApolloClient(apolloStoreClientConfig);

apolloStoreClient.onResetStore(() =>
  store.writeData({ data: StoreDefaultState })
);

const useGetState = query => useQuery(query, { fetchPolicy: 'cache-only' });

export { apolloStoreClient, useGetState };
