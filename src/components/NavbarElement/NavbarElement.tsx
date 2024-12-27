import React from "react";
import './NavbarElement.css';

interface NavbarElementProps{
    name: String;
    setVisible: React.Dispatch<React.SetStateAction<String>>;
}

const NavbarElement: React.FC<NavbarElementProps> = ({name, setVisible}) => {
    return(
        <div onClick={() => {setVisible(name)}} className="homeNavbarElement">
            <p>{name}</p>
        </div>
    )
}

export default NavbarElement;