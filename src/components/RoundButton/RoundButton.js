import React from 'react';
import classes from './RoundButton.module.scss';

const RoundButton = (props) => {
    let classType = classes.RoundButton + " ";
    if (props.full) {  classType += classes.Full + " "}
    
    switch(props.color) {
        case "green":
            classType += classes.Green
            break;
            case "orange":
            classType += classes.Orange
            break;
        case "blue":
            classType += classes.Blue
            break;
        default:
            classType += classes.Blue
            break;
    }
    return(
        <a href={(props.link)? props.link : "#"} alt={props.alt}
            title={props.title}
            className={classType}>
            {props.children}
        </a>
    )
}

export default RoundButton;