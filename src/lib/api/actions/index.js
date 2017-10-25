import { API_AUTH_GRANT_ACCESS_TOKEN } from './types';
import { getAccessTokenWithClientCredentials } from '../anilist';

export function grantAccessToken(token) {
  return {
    type: API_AUTH_GRANT_ACCESS_TOKEN,
    token,
  };
}

export function grantAccessTokenWithClientCredentials() {
  return (dispatch) => {
    getAccessTokenWithClientCredentials()
      .then((response) => {
        const { data } = response;
        return dispatch(grantAccessToken({
          accessToken: data.access_token,
          tokenType: data.token_type,
          expires: data.expires,
          expiresIn: data.expires_in,
        }));
      });
  };
}
