import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerList from './PlayerList.js';
import TeamList from './TeamList.js';
import data from './source.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: data.results,
      selectedPlayers: Array.from({ length: 12 })
    }
    this.selectedIndex = -1;
  }

  movePlayer = (destIndex) => {
    // this.state.selectedPlayers.shift(this.state.players[sourceIndex]);
    var selectedPlayer = this.state.players[this.selectedIndex];
    this.state.selectedPlayers.splice(destIndex,1,selectedPlayer);
    this.setState({
      selectedPlayers: this.state.selectedPlayers
    })
  }

  setSelection = (index) =>{
    this.selectedIndex = index;
  }
  render() {
    return (
      <div className="App">
        <PlayerList data={this.state.players}  setSelection = {this.setSelection}/>
        <TeamList data={this.state.selectedPlayers} movePlayer={this.movePlayer} />
      </div>
    );
  }
}

export default App;
