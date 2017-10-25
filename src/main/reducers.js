import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from '../lib/api/reducers/auth/index';

const reducers = combineReducers({
  auth: authReducer,
  routing: routerReducer,
});

export default reducers;
