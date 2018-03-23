import { createStore, applyMiddleware, compose } from 'redux';
// import { createLogger } from 'redux-logger';
import reducer from './reducers/index';
//import reducer from './reducers_old';
//import * as reducers from './reducers';
import api from './middlewares/api';
import logger from './middlewares/logger';
import config from './../config';

//const reducer = combineReducers(reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () => {
 // const logger = createLogger();
  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(api(config.baseUrl),logger)),
  );
  return store;
};

export default configureStore;
