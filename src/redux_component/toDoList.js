import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

// class的形式
// class ToDoListUI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     return (
//       <div>
//         <div>
//           <Input
//             // placeholder = "write someing"
//             style = {{ width: '300px', margin: '20px' }}
//             onChange = {this.props.changeInputValue}
//             value = {this.props.InputValue}
//           />
//           <Button onClick={this.props.addBtn}>增加</Button>
//         </div>
//         <div style={{width: '600px', marginLeft: '20px'}}>
//           <List
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (<List.Item onClick = {() => {(this.props.deleteItem(index))}}>{item}</List.Item>) }
//           />
//         </div>
//       </div>
//     );
//   }
// }

// 函数形式(不用继承Component)
const ToDoListUI = (props) => {
  return (
    <div>
      <div>
        <Input
          // placeholder = "write someing"
          style = {{ width: '300px', margin: '20px' }}
          onChange = {props.changeInputValue}
          value = {props.InputValue}
        />
        <Button onClick={props.addBtn}>增加</Button>
      </div>
      <div style={{width: '600px', marginLeft: '20px'}}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (<List.Item onClick = {() => {(props.deleteItem(index))}}>{item}</List.Item>) }
        />
      </div>
    </div>
  );
}
 
export default ToDoListUI;