import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers/index';
import api from './middlewares/api';
import config from './../config';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () => {
  const logger = createLogger();
  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(api(config.baseUrl),logger)),
  );
  return store;
};

export default configureStore;
