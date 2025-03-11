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
        <div className="todoAdd">
            <input type="text" value={newAct}
                onChange={handleInput}
            />
            <button type="button"
                onClick={handleClick}
            >Add</button>
        </div>
    )

}

export default Add;