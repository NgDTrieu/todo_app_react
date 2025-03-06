import React from "react";
import Add from "./Add.js"

class TodoList extends React.Component {
    state = {
        arrActs: [
            { id: "1", title: "Playing Game", onEdit: false },
            { id: "2", title: "Reading book", onEdit: false },
            { id: "3", title: "Playing Guitar", onEdit: false }
        ]
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
        this.setState(prevState => ({
            arrActs: prevState.arrActs.map(item =>
                item.id === obj.id
                    ? { ...item, onEdit: !item.onEdit }
                    : item
            )
        }));
    }

    render() {
        return (
            <>
                <div className="todoContainer">
                    <Add
                        addNewAct={this.handleAdd}
                    />

                    <div className="List">
                        {
                            this.state.arrActs.map((item, index) => {
                                return (

                                    <div key={item.id}>
                                        <span>{index + 1} - {item.title}</span> <></>
                                        <button className="Edit"
                                            onClick={() => this.handleEdit(item)}
                                        >Edit</button> <></>
                                        <button className="Delete"
                                            onClick={() => this.handleDelete(item)}
                                        >Delete</button>
                                    </div>
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