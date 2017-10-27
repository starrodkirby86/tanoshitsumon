function setExpiryTime(prevState, action) {
  const { expiryTime } = action;
  return {
    ...prevState,
    expiryTime,
  };
}

export default setExpiryTime;
