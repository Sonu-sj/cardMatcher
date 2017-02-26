import React, { Component } from 'react';
const PlayerCard = ({name,picture,HighlightIndex,index,setHighLighted}) => {
    var linkStyle = {backgroundColor: ''};
    if(HighlightIndex>=0 && HighlightIndex ===index){
        linkStyle = {backgroundColor: 'red'};
    }
    var callsetHighLighted =(index)=>{
        console.log(index);
        setHighLighted(index)
    }
    
    return <div onClick = {()=>{callsetHighLighted(index)}}className="playerCard" style={Object.assign({ "border": "1px solid"},linkStyle)}><div style={{ "textAlign": "center"}}>{name.last}</div> <img style={{ "display": "block", "margin": "auto" }} src={picture.large}></img>
    </div >
}
export default PlayerCard;
