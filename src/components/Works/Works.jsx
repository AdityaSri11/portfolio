import React from "react";
import "./works.scss"
import { useState } from "react";

export default function Works() {

    const [currentSlide,setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            type: "Projects",
            icon: "assets/projects.png",
            title: "Vertically Integrated Projects",
            desc: "Tasked with working with a team to develop a mobile phone application that captures images and extracts specific information from the images using tools such as machine learning. Developed an application that takes images of license plates found on vehicles and uses image processing technology to identify the characters that are on the license plate for any state plate in the United States.",
            img: "assets/vip-web.jpeg",
            url: "https://engineering.purdue.edu/VIP/teams/ipa",
        },

        {
            id: "2",
            type: "Projects",
            icon: "assets/projects.png",
            title: "Huffman Decoding Project",
            desc: "Created a C program that incorporates the Huffman code, an algorithm that encodes characters in text files as estimations in the probabilities and frequencies of the occurrence of the character. Coded this algorithm with the use of binary trees, linked lists, and nodes in C on a Unix operating system.",
            img: "https://media.geeksforgeeks.org/wp-content/uploads/Untitled-Diagram-2-7.png",
            url: "https://github.com/AdityaSri11/huffmanCompression",
        },

        {
            id: "3",
            type: "Projects",
            icon: "assets/projects.png",
            title: "General Atomics Summer 22' Internship",
            desc: "Incoming Summer 2022 Software Development Intern",
            img: "https://n7f2x3w4.rocketcdn.me/wp-content/uploads/2018/02/General-Atomics-logo.jpg",
            url: "https://ga.com",
        },

        {
            id: "4",
            type: "Projects",
            icon: "assets/projects.png",
            title: "Boiler Consulting Group",
            desc: "Boiler Consulting Group acts as a consulting company within Purdue, to help large companies solve their issues. Currently, I serve as the project manager for the Purdue Crew project, which involves setting up a mentorship program between alumni and current Purdue Rowers. In the past I have served as an active consultant on the Pacers Sports and Entertainment project, and as the Lead Consultant on the Kraft-Heinz Data Science Project. ",
            img: "https://engineering.purdue.edu/Engr/Academics/Undergraduate/PEPC/PEPC-Groups/BCG/BCG-web.jpg",
            url: "https://engineering.purdue.edu/Engr/Academics/Undergraduate/PEPC/PEPC-Groups/BCG",
        },

        {
            id: "5",
            type: "Projects",
            icon: "assets/projects.png",
            title: "Python for Data Science TA",
            desc: "Responsible for managing students in a course that teaches Python programming to students through data science problems. The course includes various Python concepts as well as data science topics such as hypothesis testing, clustering/k-means, mixture models, as well as linear and logistical regression. As a T.A, I am in charge of grading homework, conducting office hours, and instructing students about course topics.",
            img: "https://engineering.purdue.edu/Wraps/ECO/wrap8/themes/default/common/og-image-default.png",
            url: "https://engineering.purdue.edu/ECE/Academics/Undergraduates/UGO/CourseInfo/courseInfo?courseid=729&show=true&type=undergrad",
        },

        {
            id: "6",
            type: "Projects",
            icon: "assets/projects.png",
            title: "Purdue Solar Car",
            desc: "Currently working and designing a fully solar-powered car titled Apollo with a focus on motor control, communications for the network of microcontrollers, and the respective circuit design for each controller. I am also designing and implementing a heads-up dashboard for the driver to monitor speed, battery- temperature, and voltage using a lcd display and an Arduino Board with SPI compatibility",
            img: "https://images.squarespace-cdn.com/content/v1/53584784e4b0b772765f9073/1398662622947-TP4IHRNJK7FIDR5E3UOV/image-asset.jpeg",
            url: "https://purduesolar.org/",
        },
    ];

    const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };

    

    return (
        <div className="works" id="works">            
            <h1 className="heading">Experience</h1>

            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>

                {data.map((d) => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="leftSide">
                                    <div className="nextTo">
                                        <div className="imgContainer">

                                            <a href={d.url} target="_blank" className="iconImage">
                                                <img src={d.icon} alt ="Click Here to learn More"/>
                                            </a>  
                                            <a href={d.url} target="_blank" className="link">
                                                <p>Click here for More Info</p>
                                            </a>  

                                        </div>  
                                    </div>

                                    <br />
                                    <h2>{d.title}</h2>
                                    <br />
                                    <p>{d.desc}</p>

                                </div>
                              
                            </div>    
                        </div>    
                        <div className="right">
                            
                            <img src={d.img} alt="" />    
                        </div>
                    </div>    
                </div>    
                ))}
            </div>

            <img
                src="assets/arrow.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src="assets/arrow.png"
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />

        </div>
    )
}