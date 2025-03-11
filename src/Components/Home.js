import React from "react";
import logo from "../Images/logo.svg";

const Home = () => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <div>Todo App</div>
            Welcome HomePage!
        </div>
    )
}

export default Home;