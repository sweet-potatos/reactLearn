import React, { Component } from 'react';
import propTypes from 'prop-types';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log(this.props.index);
    this.props.deleteItem(this.props.index);
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps---->子组件接收参数');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount------>子组件销毁之前');
  }

  render() {
    return (
        <li onClick={this.handleClick}>{this.props.content}</li>
    );
  }
}

ListItem.propTypes = {
  content: propTypes.string,
  index: propTypes.number,
  deleteItem: propTypes.func,
}
 
export default ListItem;