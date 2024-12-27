import React from "react";
import './EducationElement.css';
import Bullet from "../Bullet/Bullet.tsx";


interface EducationElementProps {
    name: String;
    year: String;
    degree: String;
    coursework: String
}

const EducationElement:React.FC<EducationElementProps> = ({name, year, degree, coursework}) => {
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
                {degree}
            </p>
            <p>
                {coursework}
            </p>
        </div>
    </div>

    )
}

export default EducationElement;