import React, { useState } from "react";
import './Main.css';
import Navbar from "../Navbar/Navbar.tsx";
import About from "../About/About.tsx";
import Projects from "../Projects/Projects.tsx";
import Resume from "../Resume/Resume.tsx";

const Main = () => {

    const [visible, setVisible] = useState<String>("About");

    return(
        <div className="homeMain">
            <Navbar setVisible={setVisible}/>
            {visible=="About" && <About />} 
            {visible=="Projects" && <Projects />} 
            {visible=="Resume" && <Resume />} 
        </div>
    )
}

export default Main;