import * as types from './types';

export function getGenreList(genres) {
  return {
    type: types.API_SERIES_GET_GENRE_LIST,
    genres,
  };
}
