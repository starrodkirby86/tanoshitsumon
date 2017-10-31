import _ from 'lodash';
import { getAccessTokenWithClientCredentials } from '../../anilist';
import { grantAccessToken, setExpiryTime } from './actionCreators';

export function grantAccessTokenWithClientCredentials() {
  return (dispatch, getState) => {
    const { accessToken } = getState().auth.token;
    if (_.isNull(accessToken)) {
      getAccessTokenWithClientCredentials()
        .then((response) => {
          const { data } = response;
          const token = {
            accessToken: data.access_token,
            tokenType: data.token_type,
            expires: data.expires,
            expiresIn: data.expires_in,
          };
          dispatch(grantAccessToken(token));
          return dispatch(setExpiryTime(data.expires * 100));
        });
    }
  };
}

export function verifyAccessTokenOrLoad() {
  return (dispatch, getState) => {
    const { auth = { token: {} } } = getState();
    console.log(auth);
    const { auth: { token: { accessToken } } = { token: {} } } = getState();
    if (!accessToken) {
      dispatch(grantAccessTokenWithClientCredentials());
    }
  };
}