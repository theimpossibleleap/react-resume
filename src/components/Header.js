import React from "react";
import '../css-files/header.css';
import logo from '../images/logo-icon@3x.png';

function Header() {

    return (
        <div id="nav">
            <nav className="menu">
                <div id="logo">
                    <img src={logo} width="50px" />
                    {/* <div id="logo-text">Adam Punjabi</div> */ }
                </div>
                {/* <div className="buttons">
                    <button className="button">About</button>
                    <button className="button">Experience</button>
                    <button className="button">Education</button>
                    <button className="button">Skills</button>
                </div> */}
            </nav>
        </div>
    )
}

export default Header