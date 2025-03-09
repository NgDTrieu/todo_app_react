import React from "react";
import logo from "../Images/logo.svg";
class Home extends React.Component {
    render() {

        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <div>Todo App</div>
                Welcome HomePage!
            </div>
        )
    }
}

export default Home;