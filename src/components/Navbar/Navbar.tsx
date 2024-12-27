import React from "react";
import './Navbar.css';
import NavbarElement from "../NavbarElement/NavbarElement.tsx";

interface NavbarProps{
    setVisible: React.Dispatch<React.SetStateAction<String>>;
}

const NavbarList = [
    {
        "name": "About"
    },
    {
        "name": "Resume"
    },
    {
        "name": "Projects"
    },
    {
        "name": "Contact"
    }
]

const Navbar: React.FC<NavbarProps> = ({setVisible}) => {
    return(
        <div className="homeNavbar">
            {NavbarList.map((item) => {
                return (
                    <NavbarElement name={item.name} setVisible={setVisible}/>
                )
            })}
        </div>
    )
}

export default Navbar;