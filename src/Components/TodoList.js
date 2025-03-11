import React, { useState } from "react";
import Add from "./Add.js"
import logo from "../Images/logo.svg";

const TodoList = () => {
    const [arrActs, setArrActs] = useState([
        { id: "1", title: "Playing Game", onEdit: false },
        { id: "2", title: "Reading book", onEdit: false },
        { id: "3", title: "Playing Guitar", onEdit: false }
    ]);

    const [editText, setEditText] = useState("");
    const [editKey, setEditKey] = useState(false);

    const handleAdd = (newAct) => {
        setArrActs([...arrActs, newAct])
    }

    const handleDelete = (act) => {
        setArrActs(arrActs.filter(item => item.id !== act.id));
    }


    const handleEdit = (obj) => {
        if (this.state.editKey === true) {
            alert("Can't edit 2 act at the same time !");
            return;
        }
        setArrActs(prevState =>
            prevState.map(item =>
                item.id === obj.id
                    ? { ...item, onEdit: !item.onEdit }
                    : item
            )
        );

        setEditKey(true);
    }

    const handleInput = (event) => {
        setEditText(event.target.value);
    }



    const handleSaveEdit = (obj) => {
        setArrActs(prevState =>
            prevState.map(item =>
                item.id === obj.id
                    ? { id: item.id, title: editText === "" ? item.title : editText, onEdit: false }
                    : item
            )
        );
        setEditText("");
        setEditKey(false);
    };


    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <div>Todo App</div>
            <div className="todoContainer">
                <Add
                    addNewAct={handleAdd}
                />

                <div className="List">
                    {
                        arrActs.map((item, index) => {
                            return (
                                <React.Fragment key={item.id}>
                                    {item.onEdit === false ?
                                        <div key={item.id}>
                                            <span>{index + 1} - {item.title}</span> <></>
                                            <button className="Edit"
                                                onClick={() => handleEdit(item)}
                                            >Edit</button> <></>
                                            <button className="Delete"
                                                onClick={() => handleDelete(item)}
                                            >Delete</button>
                                        </div>
                                        :
                                        <>
                                            <div className="onEdit">
                                                <span>{index + 1}</span>
                                                <span> - </span>
                                                <input type="text" value={editText === "" ? item.title : editText}
                                                    onChange={(event) => handleInput(event)}
                                                ></input>
                                                <button type="button"
                                                    onClick={() => handleSaveEdit(item)}
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
};

export default TodoList;