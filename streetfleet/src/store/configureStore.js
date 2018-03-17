import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

import * as reducers from './reducers';

const configureStore = () => {
  const logger = createLogger();

  const store = createStore(
    combineReducers(reducers),
    applyMiddleware(logger),    
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default configureStore;
