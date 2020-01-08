import { combineReducers } from 'redux';
import uiState from './ui-state';

const rootReducer = combineReducers({
  uiState: uiState,
});

export default rootReducer;
