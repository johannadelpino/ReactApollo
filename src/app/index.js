import React from 'react';
import { render } from 'react-dom';
import { apolloStoreClient } from './store/configure-store';
import { ApolloProvider } from '@apollo/client';
import App from './app';

render(
  <ApolloProvider client={apolloStoreClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);
