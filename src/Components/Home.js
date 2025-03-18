import React from "react";
import logo from "../images/logo.svg";
import '../styles/App.css';
const Home = () => {
    return (
        <div className="flex flex-col justify-center">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="text-3xl font-bold underline">Todo App</div>
            Welcome HomePage!

        </div>
    )
}

export default Home;