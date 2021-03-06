import { grantClientCredentials } from './auth/core';
import { CLIENT_ID, CLIENT_SECRET } from '../../res/api/secret';

export function getAccessTokenWithClientCredentials() {
  return grantClientCredentials({
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
  });
}
