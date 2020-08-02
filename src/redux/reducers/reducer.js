import * as types from '../actions/actionTypes';
import initialState from '../initialState';

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_SUBREDDITS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.GET_SUBREDDITS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case types.GET_SUBREDDITS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    default:
      return state;
  }
}
