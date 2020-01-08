import * as constants from '../constants/ui-state';

export const setLoading = loadingFlag => {
  return {
    type: constants.SET_LOADING,
    loadingFlag,
  };
};
export const setError = errorFlag => {
  return {
    type: constants.SET_ERROR,
    errorFlag,
  };
};
