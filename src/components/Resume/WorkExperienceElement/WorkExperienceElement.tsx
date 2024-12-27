import React from "react";
import './WorkExperienceElement.css';
import Bullet from "../Bullet/Bullet.tsx";

interface WorkExperienceElementProps {
    name: String;
    year: String;
    role: String;
    work: String[];
}

const WorkExperienceElement:React.FC<WorkExperienceElementProps> = ({name, year, role, work}) => {
    return(
    <div className="educationElement">
        <div className="bulletBox">
            <Bullet />
        </div>
        <div className="educationContent">
            <p>
                {name}
            </p>
            <p>
                {year}
            </p>
            <p>
                {role}
            </p>
            <p>
                <ul>
                {work.map((item) => {
                    return( 
                    <li>{item}</li>
                    )
                })}
                </ul>
            </p>
        </div>
    </div>

    )
}

export default WorkExperienceElement;