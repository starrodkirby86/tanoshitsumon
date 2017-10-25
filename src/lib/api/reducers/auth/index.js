import * as types from '../../actions/types';
import grantAccessToken from './reducers/grantAccessToken';

function authReducer(prevState = [], action) {
  const { type } = action;
  switch (type) {
    case types.API_AUTH_GRANT_ACCESS_TOKEN:
      return grantAccessToken(prevState, action);
    default:
      return prevState;
  }
}

export default authReducer;
