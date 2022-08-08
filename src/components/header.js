import React from "react";
import ReactDom from "react-dom"
import globe from "../images/globe.png"


export default function Header(){
    return(
        <div className="header">
            <img className="header-logo" src={globe}/>
            <h3 className="header-text">My Travel Journal</h3>
        </div>
    )
}