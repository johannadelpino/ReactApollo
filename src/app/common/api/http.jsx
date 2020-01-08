import axios from 'axios';
import { useEffect, useState } from 'react';

const customRequest = config => {
  return axios
    .request(config)
    .then(response => {
      return { data: { ...response.data } };
    })
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return { error: error.response };
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        return { error: error.request };
      } else {
        // Something happened in setting up the request that triggered an Error
        return { error: error.message };
      }
    });
};

// Promises Implementation
export const get = (url, config) => {
  const getConfig = Object.assign({}, { method: 'get', url, params: config });
  return customRequest(getConfig);
};
export const post = (url, config) => {
  const postConfig = Object.assign({}, { method: 'post', url, data: config });
  return customRequest(postConfig);
};
export const put = (url, config) => {
  const putConfig = Object.assign({}, { method: 'put', url, data: config });
  return customRequest(putConfig);
};
export const del = (url, config) => {
  const deleteConfig = Object.assign(
    {},
    { method: 'delete', url, params: config }
  );
  return customRequest(deleteConfig);
};

export const getAll = fetchRequests => {
  const requests = fetchRequests.map(fetchRequest => {
    const params = fetchRequest.config ? fetchRequest.config : {};
    return axios.get(fetchRequest.url, { params });
  });

  return axios
    .all(requests)
    .then(responses => {
      responses.map(response => ({
        data: response.data,
        status: response.status,
        statusText: response.statusText,
      }));
    })
    .catch();
};

// Hooks implementation
export const useGetRequest = (url, config) => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    get(url, config)
      .then(resp => {
        setResponse(resp);
      })
      .catch(error => setResponse(error));
  }, [url, config]);

  return response;
};

export const usePostRequest = (url, config) => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    post(post, config)
      .then(resp => {
        setResponse(resp);
      })
      .catch(error => setResponse(error));
  }, [url, config]);

  return response;
};
