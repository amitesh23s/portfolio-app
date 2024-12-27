import React from "react";
import './Resume.css';
import Bullet from "./Bullet/Bullet.tsx";
import EducationElement from "./EducationElement/EducationElement.tsx";
import WorkExperienceElement from "./WorkExperienceElement/WorkExperienceElement.tsx";

const educationList = [
    {
        name: "The University of Texas at Dallas",
        year: "Aug 2024 - May 2026",
        degree: "Maters of Science in Computer Science",
        coursework: "Relevant Courses: Machine Learning, Cybersecurity, Computer Networks, Advanced Algorithms and Data Structures, Cloud Computing, Natural Language Processing"
    }
]

const workExperienceList = [
    
    {
        name: "Comp1",
        year: "2024",
        role: "software",
        work: ["abcd", "abcd", "efgh"]
    }
]
const Resume = () => {
    return(
        <div className="homeResume">
            <div className="homeResumeContainer">
                <p>Education</p>

                {educationList.map((item) => {
                    return (
                        <EducationElement 
                            name={item.name}
                            degree={item.degree}
                            year={item.year}
                            coursework={item.coursework}
                        />
                    )
                })}

                {workExperienceList.map((item) => {
                    return (
                        <WorkExperienceElement 
                            name={item.name}
                            year={item.year}
                            role={item.role}
                            work={item.work}
                            />
                    )
                })}
            </div>
        </div>
    )
}

export default Resume;