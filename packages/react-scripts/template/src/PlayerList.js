import React, { Component } from 'react';
import PlayerCard from './PlayerCard.js';
class PlayerList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      HighlightIndex: -1
    }
    this.setHighLighted = (index) => {
      this.setState({
        HighlightIndex: index
      })
      this.props.setSelection(index)
    }
  }


  render() {
    return (
      <div className="playerList">
        {this.props.data.map((player, i) => <PlayerCard key={i} index = {i} name={player.name} picture={player.picture} HighlightIndex={this.state.HighlightIndex} setHighLighted={this.setHighLighted} />)
        }
      </div>
    );
  }
}

export default PlayerList;
