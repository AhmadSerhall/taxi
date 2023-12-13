import './style.css';
import React from "react";

const Advantage = ({title, text}) => {
    return(
    <div className="wrapper">
        <div className="title">{title}</div>
        <div className="text">{text}</div>
    </div>
    );
};

export default Advantage;