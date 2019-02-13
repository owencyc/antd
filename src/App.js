import React, { Component } from 'react';
import { Button } from 'antd';
import Computer from './components/host/host';
import CommentApp from './components/comment/CommentApp';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentApp />
      </div>
    );
  }
}

export default App;