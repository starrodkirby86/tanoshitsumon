import axios from 'axios';
import qs from 'querystring';
import URL from 'url-parse';
import API_URL from './common';

export const API_URL_AUTH = new URL('./auth/', API_URL);

export function grantClientCredentials(params) {
  const { clientId, clientSecret } = params;
  const url = new URL('./access_token', API_URL_AUTH).href;
  return axios.post(
    url,
    qs.stringify({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    }),
  );
}
