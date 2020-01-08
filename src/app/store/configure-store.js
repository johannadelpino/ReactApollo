import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const configureStore = rootReducer => {
  const componeEnhancers = compose;
  if (process.env.NODE_ENV !== 'production') {
    const store = createStore(
      rootReducer,
      componeEnhancers(applyMiddleware(thunk, logger))
    );
    return store;
  } else {
    const store = createStore(
      rootReducer,
      componeEnhancers(applyMiddleware(thunk))
    );
    return store;
  }
};

export default configureStore;
