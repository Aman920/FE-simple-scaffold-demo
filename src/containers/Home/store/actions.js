import axios from 'axios';
import { CHANGE_HOME_LIST } from './constants';
import { MockLsit } from '../../../constants';

const changeList = (data) => {
  return {
    type: CHANGE_HOME_LIST,
    list: data
  };
}

export const getHomeList = (dispatch) => {
  // 因为这里的接口是瞎填的，所以实际情况还要根据客户端还是server端针对的设置请求url
  return axios.get('/api/balabala').then(res => dispatch(changeList(MockLsit))).catch(e => {
    dispatch(changeList(MockLsit));
  });
}