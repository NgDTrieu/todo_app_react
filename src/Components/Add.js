import React from "react";

class Add extends React.Component {
    state = {
        newAct: ""
    }

    handleInput = (event) => {
        this.setState({
            newAct: event.target.value
        })
    }

    handleClick = () => {
        if (!this.state.newAct) {
            alert("Mising Activity");
            return;
        }
        let newAct = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.newAct
        }
        this.props.addNewAct(newAct)
        this.setState({
            newAct: ""
        })
    }

    render() {
        return (
            <div className="todoAdd">
                <input type="text" value={this.state.newAct}
                    onChange={(event) => this.handleInput(event)}
                />
                <button type="button"
                    onClick={() => this.handleClick()}
                >Add</button>
            </div>
        )
    }
}

export default Add;