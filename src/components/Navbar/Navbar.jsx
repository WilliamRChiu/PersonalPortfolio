import React from "react";
import { useLighting } from "../../context/LightingContext";
import { Link } from "react-router-dom";


export default function Navbar() {
    const {lighting, toggleLighting} = useLighting();
    //note: not using anchor tags with href as it causes full page reload whereas Link changes only the route
    return(
        <nav>
            <div className="Logo"><Link to="/">Logo</Link></div>
            <div className="Links"> 
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/notes">Notes</Link>
            </div>
            <div>
                <button className="LightingButton" onClick={toggleLighting}>
                    {lighting == "day" ? "night" : "day"}
                </button>
            </div>
        </nav>
    )
}

