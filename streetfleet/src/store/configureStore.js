import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers/index';
import api from './middlewares/api';
import config from './../config';
import { persistStore, /*persistReducer*/ } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native


// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const logger = createLogger();
//  const store = createStore( persistedReducer, composeEnhancers(applyMiddleware(api(config.baseUrl), logger)));
  const store = createStore( reducer, composeEnhancers(applyMiddleware(api(config.baseUrl), logger)));
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
