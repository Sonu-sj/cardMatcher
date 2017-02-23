import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerList from './PlayerList.js';
import data from './source.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <PlayerList data={data.results}/>      
      </div>
    );
  }
}

export default App;
