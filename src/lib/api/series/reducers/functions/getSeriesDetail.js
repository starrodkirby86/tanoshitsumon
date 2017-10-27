function getSeriesDetail(prevState, action) {
  const { id, detail, key } = action;
  return {
    ...prevState,
    [id]: {
      ...prevState[id],
      [key]: detail,
    },
  };
}

export default getSeriesDetail;
