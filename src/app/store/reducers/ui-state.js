import * as constants from '../constants/ui-state';

const initialState = {
  loading: false,
  error: false,
};

const uiState = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_LOADING:
      return {
        ...state,
        loading: action.loadingFlag,
      };
    case constants.SET_ERROR:
      return {
        ...state,
        error: action.errorFlag,
      };
    default:
      return state;
  }
};

export default uiState;
