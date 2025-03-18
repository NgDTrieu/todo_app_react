import React from "react";
import "../styles/Nav.css";
import { NavLink } from "react-router";

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink to="/" activeclassname="active">Home</NavLink>
            <NavLink to="/todo" activeclassname="active">Todo</NavLink>
            <NavLink to="/about" activeclassname="active">About</NavLink>
            <NavLink to="/user" activeclassname="active">ListUser</NavLink>
        </div>
    )
}

export default Nav;