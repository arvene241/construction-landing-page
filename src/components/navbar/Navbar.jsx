import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className="construction-navbar">
            <img id="construction-navbar-logo" src={logo} alt="logo" />
            <ul className="construction-navbar-menu">
                <li id="construction-navbar-menu-active">Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Project</li>
            </ul>            
        </div>
    )
}

export default Navbar;
