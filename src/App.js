import React, { Component } from 'react';
import './App.css';
import Searchbar from './Components/Emojisearch'
import 'antd/dist/antd.css'; 
class App extends Component {
  render() {
    return (
      <div className="App">
      <Searchbar  />
      </div>
    );
  }
}

export default App;
