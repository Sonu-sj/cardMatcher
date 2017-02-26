import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerList from './PlayerList.js';
import TeamList from './TeamList.js';
import data from './source.js';

class App extends Component {
constructor(props){
  super(props)
  this.state={
    players:data.results,
    selectedPlayers:Array.from({length: 12})
  }
}
  render() {
    return (
      <div className="App">
      <PlayerList data={this.state.players}/> 
      <TeamList data={this.state.selectedPlayers}/>     
      </div>
    );
  }
}

export default App;
