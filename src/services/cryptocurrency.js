import axios from 'axios';

import { API_BASE_URL } from '../Utils/constants';
import { API_KEY } from '../../vars.js';

export const getLatestCryptos = async (
  params = {
    start: '1',
    limit: '15',
    convert: 'GBP',
    cryptocurrency_type: 'coins'
  }
) => {
  const result = await axios({
    method: 'get',
    url: `${API_BASE_URL}/v1/cryptocurrency/listings/latest`,
    params,
    headers: {
      'X-CMC_PRO_API_KEY': `${API_KEY}`
    }
  });

  const {
    data: { data }
  } = result;

  return data;
};
