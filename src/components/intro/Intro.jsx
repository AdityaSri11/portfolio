import React from "react";
import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="wrapper">
                    <h2>Nice to meet you, I'm</h2>
                    <h1>Aditya Srikanth</h1>
                    <h3>Dedicated <span></span></h3>
                </div>
                <a href="#experience">
                    <img src="assets/caret.png" alt=""/>    
                </a>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <img src="assets/aditya.png" alt=""/>
                </div>
            </div>
        </div>
    )
}