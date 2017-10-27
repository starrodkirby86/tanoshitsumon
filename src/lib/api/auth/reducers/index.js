import * as types from '../actions/types';
import grantAccessToken from './functions/grantAccessToken';
import setExpiryTime from './functions/setExpiryTime';

function authReducer(prevState = [], action) {
  const { type } = action;
  switch (type) {
    case types.API_AUTH_GRANT_ACCESS_TOKEN:
      return grantAccessToken(prevState, action);
    case types.API_AUTH_SET_EXPIRY_TIME:
      return setExpiryTime(prevState, action);
    default:
      return prevState;
  }
}

export default authReducer;
