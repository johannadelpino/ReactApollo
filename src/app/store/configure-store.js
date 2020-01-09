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
 * Root Query
 */
export const GET_STATE = gql`
  query StoreState {
    app @client
    user @client
  }
`;

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
  ...appResolvers,
  ...userResolvers,
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

const stateReducer = (action, cache) => {
  const state = cache.readQuery({ query: GET_STATE });
  switch (action.object) {
    case 'app': {
      return { ...state, app: { ...action.state } };
    }
    case 'user': {
      return { ...state, user: { ...action.state } };
    }
    default:
      return state;
  }
};

const useGetState = query => useQuery(query, { fetchPolicy: 'cache-only' });

const setState = action => {
  const newState = stateReducer(action, store);
  apolloStoreClient.writeData({ data: newState });
};

export { apolloStoreClient, useGetState, setState };
