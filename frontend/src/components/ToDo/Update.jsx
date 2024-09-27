import React, { useState } from "react";

const Update = ({ task, updateTask }) => {
    const [updatedInputs, setUpdatedInputs] = useState({ title: task.title, body: task.body });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedInputs({ ...updatedInputs, [name]: value });
    };

    const handleUpdate = () => {
        updateTask({ ...updatedInputs, id: task.id });  // Pass the updated task back to the parent component
    };

    return (
        <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
            <h1>Update Your Task</h1>
            <input 
                type="text" 
                className="todo-inputs my-4 w-100 p-3" 
                name="title"
                value={updatedInputs.title} 
                onChange={handleChange} 
            />
            <textarea 
                className="todo-inputs w-100 p-3" 
                name="body"
                value={updatedInputs.body} 
                onChange={handleChange} 
            />
            <button className="btn btn-dark my-4" onClick={handleUpdate}>
                UPDATE
            </button>
        </div>
    );
};

export default Update;
