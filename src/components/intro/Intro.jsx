import React from "react";
import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backspeed: 60, 
            strings: ["Student" , "Software Engineer", "Developer", "Techie"],
        });
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="wrapper">
                    <h2>Nice to meet you, I'm</h2>
                    <h1>Aditya Srikanth,</h1>
                    <h3>Dedicated <span ref ={textRef}></span></h3>
                </div>
                <a href="#skills">
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