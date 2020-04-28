import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_DATA } from '../store/actionType';

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

