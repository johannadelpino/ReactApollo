import { gql } from '@apollo/client';
import { useGetState } from '../configure-store';

export const GET_APP_STATE = gql`
  query AppState {
    app @client
  }
`;

export const useAppState = () => useGetState(GET_APP_STATE);

/* export const setAppState = newValue => {     
  const newState = {}; // how do you set the new value with the old value
}; */
