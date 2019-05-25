import { createStore, applyMiddleware, compose } from 'redux';

import promise from 'redux-promise';
import thunk from 'redux-thunk';

import RootReducer from './Reducers';

const middleware = applyMiddleware(thunk, promise);

const Store = createStore(RootReducer, middleware);

export default Store;
