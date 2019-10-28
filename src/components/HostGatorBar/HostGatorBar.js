import React from "react";
import logo from "../../assets/imgs/hostgator-logo.svg";
import classes from "./HostGatorBar.module.scss";

const HostGatorBar = () => {
    return(
        <div className={classes.HostGatorBar}>
            <div className={classes.container}>
                <a href="https://www.hostgator.com.br/"
                    target="_blank"
                    title="Hostgator's site"
                    alt="External link"
                    rel="noopener noreferrer" >
                    <figure>
                        <img src={logo} alt="Logo hostgator"/>
                    </figure>
                </a>
            </div>
        </div>
    )
}

export default HostGatorBar;