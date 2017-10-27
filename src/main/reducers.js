import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from '../lib/api/auth/reducers/index';
import seriesReducer from '../lib/api/series/reducers/index';

const reducers = combineReducers({
  auth: authReducer,
  series: seriesReducer,
  routing: routerReducer,
});

export default reducers;
