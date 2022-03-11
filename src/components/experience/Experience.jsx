import React from "react";
import ExperienceList from "../experienceList/ExperienceList";
import { useEffect, useState } from "react";
import "./experience.scss"

export default function Experience() {

    const[selected,setSelected] = useState("featured")

    const list = [ {id:"featured", title:"Featured",}, 
    {id:"projects", title:"Projects",}, 
    {id:"work", title:"Work",}, 
    {id:"extracurriculars", title:"Extracurriculars",}, ];

    return (
        <div className="experience" id="experience">
            <h1>Experience</h1>
            <ul>
                {list.map((item) => (
                    <ExperienceList title={item.title} active = {selected === item.id} setSelected = {setSelected}
                    id = {item.id}/>
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/vip-web.jpeg" alt="" />
                    <h3>Vertically Integrated Project</h3>
                </div>
                <div className="item">
                    <img src="assets/vip-web.jpeg" alt="" />
                    <h3>Vertically Integrated Project</h3>
                </div>
                <div className="item">
                    <img src="assets/vip-web.jpeg" alt="" />
                    <h3>Vertically Integrated Project</h3>
                </div>
                <div className="item">
                    <img src="assets/vip-web.jpeg" alt="" />
                    <h3>Vertically Integrated Project</h3>
                </div>
            </div>
        </div>
    ) 
}