import React, { Component } from 'react';
const PlayerCard = ({name,gender}) => {
    return <div className="playerCard" style={{ "padding": "100px", "border": "1px solid" }}>{name.last} 
    </div >
}
export default PlayerCard;
