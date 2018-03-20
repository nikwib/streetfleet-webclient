import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import reducers from './reducers';
import api from './middlewares/api';
import logger from './middlewares/logger';




const configureStore = () => {
  // const logger = createLogger();

  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(api, logger),
  );

  return store;
};

export default configureStore;
