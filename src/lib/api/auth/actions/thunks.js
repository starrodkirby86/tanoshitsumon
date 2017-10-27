import { getAccessTokenWithClientCredentials } from '../../anilist';
import { grantAccessToken, setExpiryTime } from './actionCreators';

export function grantAccessTokenWithClientCredentials() {
  return (dispatch) => {
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
  };
}

