import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import {reducer as home} from '../containers/Home/store';

export const getStore =  () => createStore(combineReducers({home}), applyMiddleware(thunk));

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(combineReducers({home}), defaultState, applyMiddleware(thunk));
};
