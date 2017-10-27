import * as actionCreators from './actionCreators';
import {
  getGenreList, browseSeries, getSeriesModel,
  getSeriesPage, getSeriesCharacters, getSeriesStaff, getSeriesActors,
} from '../core';

// TODO: Thunks are being as used as the endpoint called from home. Is this /good/?

export function genreList() {
  return (dispatch, getState) => {
    const { auth: { token: { accessToken } } } = getState();
    getGenreList({ accessToken })
      .then((response) => {
        const { data } = response;
        return dispatch(actionCreators.getGenreList(data));
      });
  };
}

export function browse(browseParams) {
  return (dispatch, getState) => {
    const { auth: { token: { accessToken } } } = getState();
    browseSeries({
      browseParams,
      accessToken,
    }).then((response) => {
      const { data } = response;
      return dispatch(actionCreators.getSeriesByBrowse(data));
    });
  };
}

export function seriesDetail(id, getSeriesFunc, getSeriesActionCreator) {
  return (dispatch, getState) => {
    const { auth: { token: { accessToken } } } = getState();
    getSeriesFunc({
      id,
      accessToken,
    }).then((response) => {
      const { data } = response;
      return dispatch(getSeriesActionCreator(id, data));
    });
  };
}

export function seriesModel(id) {
  return seriesDetail(id, getSeriesModel, actionCreators.getSeriesModel);
}

export function seriesPage(id) {
  return seriesDetail(id, getSeriesPage, actionCreators.getSeriesPage);
}

export function seriesCharacters(id) {
  return seriesDetail(id, getSeriesCharacters, actionCreators.getSeriesCharacters);
}

export function seriesStaff(id) {
  return seriesDetail(id, getSeriesStaff, actionCreators.getSeriesStaff);
}

export function seriesActors(id) {
  return seriesDetail(id, getSeriesActors, actionCreators.getSeriesActors);
}
