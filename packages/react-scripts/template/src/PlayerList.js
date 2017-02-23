import React, { Component } from 'react';
import PlayerCard from './PlayerCard.js';
class PlayerList extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="playerList">
            {this.props.data.map((player) => <div><PlayerCard {...player}/></div>)
            }
          </div>
        </div>

      </div>
    );
  }
}

export default PlayerList;
