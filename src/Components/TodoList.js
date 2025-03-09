import React from "react";
import Add from "./Add.js"
import logo from "../Images/logo.svg";

class TodoList extends React.Component {
    state = {
        arrActs: [
            { id: "1", title: "Playing Game", onEdit: false },
            { id: "2", title: "Reading book", onEdit: false },
            { id: "3", title: "Playing Guitar", onEdit: false }
        ],
        editText: "",
        editKey: false
    }

    handleAdd = (newAct) => {
        this.setState({
            arrActs: [...this.state.arrActs, newAct]
        })
    }

    handleDelete = (act) => {
        this.setState({
            arrActs: this.state.arrActs.filter(item => item.id !== act.id)
        })
    }

    handleEdit = (obj) => {
        if (this.state.editKey === true) {
            alert("Can't edit 2 act at the same time !");
            return;
        }
        this.setState(prevState => ({
            arrActs: prevState.arrActs.map(item =>
                item.id === obj.id
                    ? { ...item, onEdit: !item.onEdit }
                    : item
            )
        }));
        this.setState({
            editKey: true
        })
    }

    handleInput = (event) => {
        this.setState({
            editText: event.target.value
        })
    }

    handleSaveEdit = (obj) => {
        this.setState(prevState => ({
            arrActs: prevState.arrActs.map(item =>
                item.id === obj.id
                    ? { id: item.id, title: this.state.editText, onEdit: false }
                    : item
            )
        }));
        this.setState({
            editText: "",
            editKey: false
        })
    }

    render() {
        return (
            <>
                <img src={logo} className="App-logo" alt="logo" />
                <div>Todo App</div>
                <div className="todoContainer">
                    <Add
                        addNewAct={this.handleAdd}
                    />

                    <div className="List">
                        {
                            this.state.arrActs.map((item, index) => {
                                return (
                                    <React.Fragment key={item.id}>
                                        {item.onEdit === false ?
                                            <div key={item.id}>
                                                <span>{index + 1} - {item.title}</span> <></>
                                                <button className="Edit"
                                                    onClick={() => this.handleEdit(item)}
                                                >Edit</button> <></>
                                                <button className="Delete"
                                                    onClick={() => this.handleDelete(item)}
                                                >Delete</button>
                                            </div>
                                            :
                                            <>
                                                <div className="onEdit">
                                                    <span>{index + 1}</span>
                                                    <span> - </span>
                                                    <input type="text" value={this.state.editText === "" ? item.title : this.state.editText}
                                                        onChange={(event) => this.handleInput(event)}
                                                    ></input>
                                                    <button type="button"
                                                        onClick={() => this.handleSaveEdit(item)}
                                                    >Save</button>
                                                </div>
                                            </>
                                        }
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default TodoList;