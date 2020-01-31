import axios from 'axios';
import { CHANGE_HOME_LIST } from './constants';
import { MockLsit } from '../../../constants';

const changeList = (data) => {
  return {
    type: CHANGE_HOME_LIST,
    list: data
  };
}

export const getHomeList = () => {
  return (dispatch) => {
    return axios.get('http://balabala').then(res => dispatch(changeList(MockLsit))).catch(e => {
      dispatch(changeList(MockLsit));
    });
  }
}