import React, { Component } from 'react';
import store from '../store/index';
import { GET_DATA } from '../store/actionType';
import { changeInputAction, addBtnAction, deleteItemAction } from '../store/actionCreators'
import ToDoListUI from './toDoList';
import axios from 'axios';

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log('store', store.getState());
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.addBtn = this.addBtn.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange.bind(this));
  }

  componentDidMount() {
    axios.get('http://rap2.taobao.org:38080/app/mock/252426/example/1587973285150')
      .then((res) => {
        console.log('res', res);
        const dealArray = [];
        res.data.array.forEach(item => {
          dealArray.push(item.bar);
        })
        store.dispatch({
          type: GET_DATA,
          value: dealArray,
        })
      })
  }

  changeInputValue(e) {
    // store.dispatch({
    //   type: CHANGE_INPUT,
    //   value: e.target.value
    // })
    const action = changeInputAction(e.target.value);
    store .dispatch(action);

    // console.log(e.target.value);

    // const action = {
    //   type: 'changeInput',
    //   value: e.target.value
    // }
    // store.dispatch(action);
  }

  addBtn() {
    // store.dispatch({
    //   type: ADD_ITEM,
    // });
    const action = addBtnAction()
    store.dispatch(action)
  }

  deleteItem(index) {
    // store.dispatch({
    //   type: DELETE_ITEM,
    //   index,
    // });
    const action = deleteItemAction()
    store.dispatch(action)
  }

  storeChange() {
    // console.log('改变状态', store.getState());
    this.setState(store.getState(), () => {
      console.log('组件', this.state);
    });
  }

  render() {  
    return (
      <ToDoListUI
        InputValue = {this.state.InputValue}
        list = {this.state.list}
        changeInputValue = {this.changeInputValue}
        addBtn = {this.addBtn}
        deleteItem = {this.deleteItem}
      />
    );
  }
}
 
export default TodoList;