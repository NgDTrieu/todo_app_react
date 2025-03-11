import React from "react";
import "../Styles/Nav.css";
import { NavLink } from "react-router";

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink to="/" activeclassname="active">Home</NavLink>
            <NavLink to="/Todo" activeclassname="active">Todo</NavLink>
            <NavLink to="/About" activeclassname="active">About</NavLink>
            <NavLink to="/User" activeclassname="active">ListUser</NavLink>
        </div>
    )
}

export default Nav;