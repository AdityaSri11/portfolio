import React from "react";
//import "./experience.scss"
import "./experienceList.scss"

export default function ExperienceList({id, title, active, setSelected}) {
    return (
        <li className={active ? "experienceList active" : "experienceList"}
        onClick = {() => setSelected(id)}>
            {title}
        </li>
    )
}