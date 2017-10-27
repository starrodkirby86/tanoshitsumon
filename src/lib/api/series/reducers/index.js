import * as types from '../actions/types';
import getGenreList from './functions/getGenreList';
import getSeriesByBrowse from './functions/getSeriesByBrowse';
import getSeriesDetail from './functions/getSeriesDetail';

function seriesReducer(prevState = [], action) {
  const { type } = action;
  switch (type) {
    case types.API_SERIES_GET_GENRE_LIST:
      return getGenreList(prevState, action);
    case types.API_SERIES_BROWSE_SERIES:
      return getSeriesByBrowse(prevState, action);
    case types.API_SERIES_GET_SERIES_MODEL:
    case types.API_SERIES_GET_SERIES_PAGE:
    case types.API_SERIES_GET_SERIES_CHARACTERS:
    case types.API_SERIES_GET_SERIES_STAFF:
    case types.API_SERIES_GET_SERIES_ACTORS:
      return getSeriesDetail(prevState, action);
    default:
      return prevState;
  }
}

export default seriesReducer;
