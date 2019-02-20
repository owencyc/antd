import React, { Component } from 'react';
import { Button } from 'antd';
import Computer from './components/host/host';
import CommentApp from './components/comment/CommentApp';
import TodoList from './containers/TodoListContainer'
import AddTodo from './containers/AddTodoContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo/>
        <TodoList />
      </div>
    );
  }
}

export default App;