function grantAccessToken(prevState, action) {
  const { token } = action;
  return {
    ...prevState,
    token,
  };
}

export default grantAccessToken;
