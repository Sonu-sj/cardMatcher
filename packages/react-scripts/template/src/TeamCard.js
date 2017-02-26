import React, { Component } from 'react';
const TeamCard = ({name = '', gender, picture}) => {
    return <div className="teamCard" style={{ "border": "1px solid" }}> <img style={{ "display": "block", "margin": "auto" }} src={picture}></img>
    </div >
}
export default TeamCard;