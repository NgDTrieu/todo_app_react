import React from "react";
import "../Styles/Nav.css";
import { NavLink } from "react-router";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/Todo" activeClassName="active">Todo</NavLink>
                <NavLink to="/About" activeClassName="active">About</NavLink>
            </div>
        )
    }
}

export default Nav;