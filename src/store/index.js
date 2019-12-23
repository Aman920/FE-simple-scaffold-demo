import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import {reducer as home} from '../containers/Home/store';

const getStore =  () => createStore(combineReducers({home}), applyMiddleware(thunk));

export default getStore;
