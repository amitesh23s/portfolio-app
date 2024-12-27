import React from "react";
import './Projects.css';
import ProjectElement from "../ProjectElement/ProjectElement.tsx";

const projectsList = [
    {
        name: "Project1"
    },
    {
        name: "Project1"
    },
    {
        name: "Project1"
    },
    {
        name: "Project1"
    },
    {
        name: "Project1"
    },
    {
        name: "Project1"
    },
    {
        name: "Project1"
    }
]
const Projects = () => {
    return(
        <div className="homeProjects">
            <div className="containerProjects">
                {projectsList.map((item) => {
                    return(
                        <ProjectElement title={item.name} />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;