import React from "react";
import ExperienceList from "../experienceList/ExperienceList";
import { useEffect, useState } from "react";
import "./experience.scss"
import { projectsExperience, workExperience, extracurricularExperience } from "../../data";

export default function Experience() {

    const[selected,setSelected] = useState("featured")
    const[data,setData] = useState([])


    const list = [
        {id:"projects", title:"Projects",}, 
        {id:"work", title:"Work",}, 
        {id:"extracurriculars", title:"Extracurriculars",}, ];

    useEffect(() => {

        switch(selected){
            case "projects":
                setData(projectsExperience);
                break;
            case "work":
                setData(workExperience);
                break;
            case "extracurriculars":
                setData(extracurricularExperience);
                break;
            default:
                setData(projectsExperience);
        }

    }, [selected])

    return (
        <div className="experience" id="experience">
            <h1>Experience:</h1>
            <ul>
                {list.map((item) => (
                    <ExperienceList title={item.title} active = {selected === item.id} setSelected = {setSelected}
                    id = {item.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                <div className="item">
                    <img src= {d.img} alt="" />
                    <h3>{d.title}</h3>
                    
                </div>
                ))}
            </div>
        </div>
    ) 
}