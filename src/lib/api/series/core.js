import axios from 'axios';
import qs from 'querystring';
import URL from 'url-parse';
import API_URL from '../core/common';

export const MEDIA_TYPES = {
  TV: 0,
  TV_SHORT: 1,
  MOVIE: 2,
  SPECIAL: 3,
  OVA: 4,
  ONA: 5,
  MUSIC: 6,
  MANGA: 7,
  NOVEL: 8,
  ONE_SHOT: 9,
  DOUJIN: 10,
  MANHUA: 11,
  MANHWA: 12,
};

export const API_URL_ANIME = URL('./anime/', API_URL);
export const API_URL_MANGA = URL('./manga/', API_URL);

export function get(url, accessToken) {
  const query = qs.stringify({ access_token: accessToken });
  const requestUrl = url.set('query', query).href;
  return axios.get(requestUrl).then(response => response);
}

export function getSeries(params, route) {
  const { id, accessToken } = params;
  const url = new URL(route ? `./${id}/${route}` : `./${id}`, API_URL_ANIME);
  return get(url, accessToken);
}

export const getSeriesModel = params => getSeries(params);
export const getSeriesPage = params => getSeries(params, 'page');
export const getSeriesCharacters = params => getSeries(params, 'characters');
export const getSeriesStaff = params => getSeries(params, 'staff');
export const getSeriesActors = params => getSeries(params, 'actors');

export function browseSeries(params) {
  const { browseParams, accessToken } = params;

  /*
  const { id, year, season, type,
    status, genres, genres_exclude,
    sort, airing_data, full_page, page } = params;
  */

  const url = new URL('/browse/anime', API_URL);
  return axios.get(
    url,
    qs.stringify({
      ...browseParams,
      access_token: accessToken,
    }),
  ).then(response => response);
}

export function getGenreList(params) {
  const { accessToken } = params;
  const url = new URL('./genre_list', API_URL);
  return get(url, accessToken);
}
