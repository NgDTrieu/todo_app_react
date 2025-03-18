import React, { useState } from "react";
import Add from "./Add.js"
import logo from "../images/logo.svg";

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
        if (editKey === true) {
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
        <div>
            <div className="flex justify-center">
                <img src={logo} className="App-logo center" alt="logo" />
            </div>
            <div className="font-bold">Todo App</div>
            <div className="todoContainer">
                <Add
                    addNewAct={handleAdd}
                />
                <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg">
                    {arrActs.map((item, index) => (
                        <React.Fragment key={item.id}>
                            {item.onEdit === false ? (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between bg-white p-4 w-full rounded-lg shadow-sm mb-2 hover:bg-gray-200 transition"
                                >
                                    <span className="text-gray-700 font-medium">
                                        {index + 1} - {item.title}
                                    </span>
                                    <div className="flex space-x-2">
                                        <button
                                            className="Edit px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                                            onClick={() => handleEdit(item)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="Delete px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                                            onClick={() => handleDelete(item)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="onEdit flex items-center justify-between bg-yellow-100 p-4 w-full max-w-2xl rounded-lg shadow-sm mb-2">
                                    <span className="text-gray-700 font-medium">{index + 1} -</span>
                                    <input
                                        className="flex-1 ml-4 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700"
                                        type="text"
                                        value={editText === "" ? item.title : editText}
                                        onChange={(event) => handleInput(event)}
                                    />
                                    <button
                                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200 ml-2"
                                        type="button"
                                        onClick={() => handleSaveEdit(item)}
                                    >
                                        Save
                                    </button>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

            </div>
        </div>
    )
};

export default TodoList;