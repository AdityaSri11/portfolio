import React from "react";
import "./skills.scss"

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <div className="left">
                <div className="imgContainer">
                    <center><img src="assets/headshot.jpeg" alt="" /></center>
                </div>
            </div>
            <div className="right">
                <h1>About Me</h1>
                <div className="introParagraph">
                    <br />
                    <p className="introParagraph">
                        Hello! My name is Aditya, and I am an Electrical Computer Engineering Student at Purdue University.  
                        With my strong professional, analytical, logical, and communication skills, I plan on pursuing a career
                        in software engineering and development. In free time, I like to work on various software projects including
                        this website and various others. When I am not doing schoolwork or programming I like to listen to a variety
                        of artists including The Weeknd, Jaden Smith, & A$AP Rocky.
                    </p>
                    <br />
                    <br />
                    <h3>Skills:</h3>
                    <br />
                    <div className="skills">
                        <ul>
                            <li>C / C++</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>SQL</li>
                            <li>MongoDB</li>
                            <li>React.js / Node.js</li>
                            <li>HTML / CSS</li>
                            <li>JavaScript</li>
                            <li>Swift / Kotlin</li>
                            <li>MATLAB</li>
                            <li>Microsoft Office Suite</li>
                            <li>Machine & Deep Learning</li>
                        </ul>
                    </div>
                    <br />
                    <br />
                    <h3>Relevant Coursework:</h3>

                    <div className="coursework">
                    <br />
                        <ul>
                            <li>Advanced C Programming</li>
                            <li>Data Structures</li>
                            <li>Digital System Design</li>
                            <li>Electric Engineering Fundamentals I and II</li>
                            <li>Python for Data Science</li>
                            <li>Ordinary Differential Equations</li>
                            <li>Linear Algebra</li>
                            <li>Signals and Systems</li>
                            <li>Linear Optimization</li>
                            <li>Real Analysis</li>
                            <li>Discrete Math</li>
                            <li>Microprocessor Systems and Interfacing</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    ) 
}