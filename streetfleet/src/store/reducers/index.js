import { combineReducers } from 'redux';

import carsReducer from './cars.reducer';
import authReducer from './auth.reducers';

export default combineReducers({
  cars: carsReducer,
  auth: authReducer,
});
