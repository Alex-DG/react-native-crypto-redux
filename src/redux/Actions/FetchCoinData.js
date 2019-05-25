import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from '../types';

import { getLatestCryptos } from '../../services/cryptocurrency';

const fetchCoinData = () => async dispatch => {
  try {
    dispatch({ type: FETCHING_COIN_DATA });

    const data = await getLatestCryptos();

    dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: error });
  }
};

export default fetchCoinData;
