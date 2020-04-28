import React, { Component } from 'react';
import ListItem from './ListItem';
import ShowEle from './ShowEle'
import axios from 'axios';

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: '123',
      ulList: ['列表1', '列表2']
    }
  }

  inputChange() {
    console.log(this.input.value)
    this.setState({
      inputValue: this.input.value
    });
  }

  addList() {
    this.setState({
      ulList: [...this.state.ulList, this.state.inputValue],
      inputValue: ''
    })
  }

  deleteItem(index) {
    let list = this.state.ulList
    list.splice(index, 1)
    this.setState({
      ulList: list
    })
  }

  componentWillMount() {
    console.log('componentWillMount---------->组件将要挂载之前');
  }

  componentDidMount() {
    console.log('componentDidMount-------->组件挂载完成');
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
      .then((res) => {
        let listLast = this.state.ulList;
        listLast.push(res.data.errors[0].extensions.code);
        this.setState({
          ulList: listLast,
        })
      })
      .catch((err) => {
        console.log('获取数据失败----->', err);
      })
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate------>组件是否要更新');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate------>组件更新之前');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate----->组件更新完成');
  }

  render() {
    console.log('render---->组件渲染、更新中(state有变化就会执行)');
    return (
      <div>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            ref={(input) => {this.input=input}}
          />
          <button onClick={this.addList.bind(this)}>增加</button>
        </div>
        <ul>
          {
            this.state.ulList.map((item, index) => {
              return (
                  <ListItem
                    key={index+item}
                    content={item}
                    index={index}
                    list={this.state.ulList}
                    deleteItem={this.deleteItem.bind(this)}
                  />
              );
            })
          }
        </ul>
        <ShowEle />
      </div>
    );
  }
}

export default List;