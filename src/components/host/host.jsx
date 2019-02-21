import React, { Component } from 'react'
import { Switch ,List,Table,Button} from 'antd';
import Screen from '../screen/screen';
import { Link ,Route} from 'react-router-dom';

const columns = [{
  title: '姓名',
  dataIndex: 'username',
  key: 'username',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '性别',
  dataIndex: 'gender',
  key: 'gender',
}];
const users = [
  { username: '胡晓明', age: 27, gender: 'male' },
  { username: '韩佳瑞', age: 29, gender: 'female' },
  { username: '哈哈哈', age: 29, gender: 'female' }
]

class Computer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true
    };
  }
  

  onChange() {
    let status = !this.state.status;
    console.log(`1-switch to ${this.state.status}`);
    this.setState({
      status: status
    });
    console.log(`2-switch to ${status}`);
  }

  render() {
    return (
      <div>
        <Switch checked={this.state.status} onChange={this.onChange.bind(this)} />
        <Screen sContent={this.state.status ? '开机了。。。' : null} />

        <Table dataSource={users} columns={columns} />
        
        <Button type="primary" >
        <Link to="/home">move to nav</Link>
                        
                    </Button>
                
      </div>
    )
  }
}

export default Computer;