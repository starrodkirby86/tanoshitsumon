import * as types from './types';

export function getGenreList(genres) {
  return {
    type: types.API_SERIES_GET_GENRE_LIST,
    genres,
  };
}

export function getSeriesByBrowse(series) {
  return {
    type: types.API_SERIES_BROWSE_SERIES,
    series,
  };
}

export function getSeriesDetail(id, detail, type, key) {
  return {
    type,
    id,
    detail,
    key,
  };
}

export function getSeriesModel(id, detail) {
  return getSeriesDetail(id, detail, types.API_SERIES_GET_SERIES_MODEL, 'model');
}

export function getSeriesPage(id, detail) {
  return getSeriesDetail(id, detail, types.API_SERIES_GET_SERIES_PAGE, 'page');
}

export function getSeriesCharacters(id, detail) {
  return getSeriesDetail(id, detail, types.API_SERIES_GET_SERIES_CHARACTERS, 'characters');
}

export function getSeriesStaff(id, detail) {
  return getSeriesDetail(id, detail, types.API_SERIES_GET_SERIES_STAFF, 'staff');
}

export function getSeriesActors(id, detail) {
  return getSeriesDetail(id, detail, types.API_SERIES_GET_SERIES_ACTORS, 'actors');
}
