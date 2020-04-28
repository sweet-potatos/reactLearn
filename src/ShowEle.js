import React, { Component } from 'react';

class ShowEle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isShow: !this.state.isShow,
    })
  }

  render() { 
    return (
      <div>
        {
          this.state.isShow && (<div>显示隐藏</div>)
        }
        <button onClick={this.toggle}>test</button>
      </div>
    );
  }
}
 
export default ShowEle;