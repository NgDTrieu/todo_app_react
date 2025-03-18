import { React, useState } from "react";

const Add = ({ addNewAct }) => {
    const [newAct, setNewAct] = useState("");

    const handleInput = (event) => {
        setNewAct(event.target.value);
    }

    const handleClick = () => {
        if (!newAct) {
            alert("Mising Activity");
            return;
        }
        let newActivity = {
            id: Math.floor(Math.random() * 10000),
            title: newAct,
            onEdit: false
        }
        addNewAct(newActivity);
        setNewAct("");
    }


    return (
        <div className="todoAdd flex items-center justify-center m-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <input
                className="rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none px-4 py-2 text-xl text-gray-800 mx-2 w-full"
                type="text"
                value={newAct}
                onChange={handleInput}
                placeholder="Enter your task..."
            />
            <button
                type="button"
                className="ml-2 bg-blue-400 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200"
                onClick={handleClick}
            >
                Add
            </button>
        </div>

    )

}

export default Add;