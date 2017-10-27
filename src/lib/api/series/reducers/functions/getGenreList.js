function getGenreList(prevState, action) {
  const { genres } = action;
  return {
    ...prevState,
    genres,
  };
}

export default getGenreList;
