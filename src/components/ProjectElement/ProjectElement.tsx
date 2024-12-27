import React from "react";
import './ProjectElement.css';
import MLimage from "../ImageComponents/Image/MLimage.tsx";
interface ProjectElementProps{
    title: String
}

const ProjectElement: React.FC<ProjectElementProps> = ({title}) => {
    return(
        <div className="homeProjectElement">
            <div className="title">
                {title}
            </div>
            
            <div className="ImageContainer">
                <MLimage />
            </div>
            
            <div className="containerProjectElement">
                <p className="descriptionContent">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}

export default ProjectElement;