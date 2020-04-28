import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_DATA } from '../store/actionType';
import axios from 'axios';

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value,
})

export const addBtnAction = () => ({
  type: ADD_ITEM,
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index,
})

export const getDataAction = () => {
  return (dispatch) => {
    axios.get('http://rap2.taobao.org:38080/app/mock/252426/example/1587973285150')
    .then((res) => {
      console.log('res', res);
      const dealArray = [];
      res.data.array.forEach(item => {
        dealArray.push(item.bar);
      })
      dispatch({
        type: GET_DATA,
        value: dealArray,
      })
    })
  }
}