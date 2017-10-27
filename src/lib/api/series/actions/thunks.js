import * as actionCreators from './actionCreators';
import { getGenreList } from '../core';

export function thunkGetGenreList() {
  return (dispatch, getState) => {
    const { auth: { token: { accessToken } } } = getState();
    getGenreList({ accessToken })
      .then((response) => {
        const { data } = response;
        return dispatch(actionCreators.getGenreList(data));
      });
  };
}
