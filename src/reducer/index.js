import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_DATA } from '../store/actionType';

const defaultState = {
  inputValue: 'test',
  list: [],
};

export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT) {
    let copyObj = JSON.parse(JSON.stringify(state));
    copyObj.inputValue = action.value;
    return copyObj;
  }
  
  if(action.type === ADD_ITEM) {
    let copyObj = JSON.parse(JSON.stringify(state));
    copyObj.list.push(copyObj.inputValue);
    copyObj.inputValue = '';
    return copyObj;
  }

  if(action.type === DELETE_ITEM) {
    let copyObj = JSON.parse(JSON.stringify(state));
    copyObj.list.splice(action.index, 1);
    return copyObj;
  }

  if(action.type === GET_DATA) {
    let copyObj = JSON.parse(JSON.stringify(state));
    copyObj.list = action.value;
    return copyObj;
  }

  console.log('state', state);


  return state;
}