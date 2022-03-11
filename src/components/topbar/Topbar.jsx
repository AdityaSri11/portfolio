import React from "react";
import "./topbar.scss"
import {LocalPhone, Email} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
        
                    <a href="#intro" className="logo">Aditya S.</a>
                    <div className="itemContainer">
                        <LocalPhone classname="icon" />
                        <span>+1 732-491-9931</span>
                    </div>
                    <div className="itemContainer">
                        <Email classname="icon"/>
                        <span>aditya.srikanth111@gmail.com</span>
                    </div>
                </div>
                
                <div className="right">
                    <span className="navigation">
                        <a href="#intro" className="choices">Home</a>
                        <a href="#experience" className="choices">Experience</a>
                        <a href="#skills" className="choices">Skills</a>
                        <a href="#connect" className="choices">Connect</a>
                    </span>
                </div>
            </div>
        </div>
    ) 
}