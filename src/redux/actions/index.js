import getSubReddits from '../../api';
import * as types from './actionTypes';

export function getSubRedditsLoading() {
  return {
    type: types.GET_SUBREDDITS_LOADING,
  };
}

export function getSubRedditsError(error) {
  return {
    type: types.GET_SUBREDDITS_ERROR,
    error,
  };
}

export function getSubRedditsSuccess(data) {
  return {
    type: types.GET_SUBREDDITS_SUCCESS,
    data,
  };
}

export function getSubRedditsThunk() {
  return async function (dispatch) {
    dispatch(getSubRedditsLoading());
    try {
      const res = await getSubReddits();
      const data = res.data.data.children;
      dispatch(getSubRedditsSuccess(data));
    } catch ({ ...errorResponse }) {
      dispatch(getSubRedditsError(errorResponse.message));
    }
  };
}
