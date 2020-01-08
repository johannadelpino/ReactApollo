import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import {
  apolloClientOne,
  apolloClientRest,
} from 'app-common/api/apollo-clients';

export const useClientOneQuery = query => {
  return useQuery(query, { client: apolloClientOne });
};

export const useClientRestQuery = query => {
  const [response, setResponse] = useState({ loading: false });

  useEffect(() => {
    setResponse({ loading: true });
    apolloClientRest
      .query({ query })
      .then(resp => {
        setResponse({ loading: false, data: resp });
      })
      .catch(error => setResponse({ loading: false, error: error }));
  }, [query]);

  return response;
};
