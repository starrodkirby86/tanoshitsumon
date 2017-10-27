function getSeriesByBrowse(prevState, action) {
  const { series } = action;
  return {
    ...prevState,
    series,
  };
}

export default getSeriesByBrowse;
