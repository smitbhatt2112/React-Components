import './Card.css';
import React from 'react';
const Card=(props)=>{
    //props.children means content between open close tag of Card
    //If we want to add class name in Card tag then props.className method used
    //It is just doing className= 'card props.className' and in div it is adding whole content
    const classes= 'card '+props.className
    return <div className={classes}>{props.children}</div>
}
export default Card;