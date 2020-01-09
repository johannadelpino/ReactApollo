import { gql } from '@apollo/client';
import { useGetState, setState, apolloStoreClient } from '../configure-store';
import * as APP_CONSTANTS from '../constants/app-contants';

export const GET_APP_STATE = gql`
  query AppState {
    app @client
  }
`;

const appStateReducer = action => {
  const state = apolloStoreClient.readQuery({ query: GET_APP_STATE }); // gets the entire app state
  switch (action.type) {
    case APP_CONSTANTS.UPDATE_LOADING: {
      const newState = { ...state.app, loading: action.value };
      return newState;
    }
    default:
      return state;
  }
};

const setAppState = action => {
  const state = appStateReducer(action);
  setState({ object: 'app', state });
};

export const useAppState = () => useGetState(GET_APP_STATE);

export const updateLoading = loadingFlag => {
  setAppState({ type: APP_CONSTANTS.UPDATE_LOADING, value: loadingFlag });
};
