import * as types from '../actions/types';
import { getGenreList } from './functions/getGenreList';

function seriesReducer(prevState = [], action) {
  const { type } = action;
  switch (type) {
    case types.API_SERIES_GET_GENRE_LIST:
      return getGenreList(prevState, action);
    default:
      return prevState;
  }
}

export default seriesReducer;
