import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import {
  apolloClientOne,
  apolloClientRest,
} from 'app-common/api/apollo-clients';

export const useClientOneQuery = (query, config) => {
  let queryParams = { client: apolloClientOne };
  if (config) {
    queryParams = { ...queryParams, ...config };
  }
  return useQuery(query, queryParams);
};

export const useClientRestQuery = (query, config) => {
  const [response, setResponse] = useState({ loading: false });

  useEffect(() => {
    setResponse({ loading: true });
    apolloClientRest
      .query({ query })
      .then(resp => {
        setResponse({ loading: false, data: resp });
      })
      .catch(error => setResponse({ loading: false, error: error }));
  }, [query, config]);

  return response;
};
