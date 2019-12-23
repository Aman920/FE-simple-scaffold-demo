import axios from 'axios';
import { CHANGE_HOME_LIST } from './constants';

const changeList = (data) => {
  return {
    type: CHANGE_HOME_LIST,
    list: data
  };
}

export const getHomeList = () => {
  return (dispatch) => {
    // 自行补充接口
    axios.get('xxxx').then(res => console.log(res)).catch(e => {
      dispatch(changeList(mockList));
    });
  }
}