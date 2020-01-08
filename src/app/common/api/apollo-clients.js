import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloLink } from 'apollo-link';
import { RestLink } from 'apollo-link-rest';
import { appConfig } from '../../config/urls';

/**
 * Apollo client with graphql endpoint
 */
const apolloClientOneConfig = {
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    new HttpLink({
      uri: appConfig.apiUrl.graphQL,
    }),
  ]),
};

export const apolloClientOne = new ApolloClient(apolloClientOneConfig);

/**
 * Apollo client with rest endpoint
 */

const restEndpoints = {
  getPerson: appConfig.apiUrl.getPersonUrl,
};

const apolloClientRestConfig = {
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    new RestLink({
      endpoints: restEndpoints,
    }),
  ]),
};

export const apolloClientRest = new ApolloClient(apolloClientRestConfig);
