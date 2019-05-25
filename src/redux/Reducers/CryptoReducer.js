import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from '../types';

const initialState = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_COIN_DATA:
      return {
        ...state,
        isFetching: true,
        data: [],
        hasError: false,
        errorMessage: null
      };

    case FETCHING_COIN_DATA_SUCCESS:
      console.log('action.payload', action.payload);
      return {
        ...state,
        isFetching: false,
        data: [...action.payload],
        hasError: false,
        errorMessage: null
      };

    case FETCHING_COIN_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        data: [],
        hasError: true,
        errorMessage: action.payload
      };

    default:
      return state;
  }
}
