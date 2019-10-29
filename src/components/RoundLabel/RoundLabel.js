import React from 'react';
import classes from './RoundLabel.module.scss';

const RoundLabel = (props) => {
    let classType = classes.RoundLabel + " ";
    if (props.full) {  classType += classes.Full + " "}
    if (props.rightSide) {  classType += classes.RightSide + " "}
    if (props.leftSide) {  classType += classes.LeftSide + " "}
    
    switch(props.type) {
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
        <label href={props.link} alt={props.alt} title={props.title} className={classType}>
            {props.children}
        </label>
    )
}

export default RoundLabel;