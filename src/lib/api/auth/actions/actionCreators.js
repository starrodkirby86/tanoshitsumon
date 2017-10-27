import * as types from './types';

export function grantAccessToken(token) {
  return {
    type: types.API_AUTH_GRANT_ACCESS_TOKEN,
    token,
  };
}

export function setExpiryTime(expiryTime) {
  return {
    type: types.API_AUTH_SET_EXPIRY_TIME,
    expiryTime,
  };
}