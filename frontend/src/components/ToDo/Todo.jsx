import React, { useState } from "react";
import './Todo.css';
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";

const Todo = () => {
    const [Inputs, setInputs] = useState({ title: '', body: "" });
    const [Array, setArray] = useState([]);
    const [editTask, setEditTask] = useState(null);  // Added state to track the task being edited

    const show = () => {
        document.getElementById('textarea').style.display = "block";
    };

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    };

    const submit = () => {
        if (Inputs.title === "" || Inputs.body === "") {
            toast.error("Your Task Cannot Be Empty!");
        } else {
            setArray([...Array, Inputs]);
            setInputs({ title: '', body: "" });
            toast.success("Your Task is Added");
            toast.error("Your Task is Not Saved! Please SignUp!");
        }
    };

    const del = (id) => {
        Array.splice(id, 1);
        setArray([...Array]);
    };

    // Function to handle task updates
    const dis = (value) => {
        console.log(value);
        document.getElementById("todo-update").style.display = "block"; // This is causing the error
    };
    

    const updateTask = (updatedTask) => {
        const newArray = Array.map((task, index) =>
            index === updatedTask.id ? updatedTask : task
        );
        setArray(newArray);
        setEditTask(null);  // Clear the edit state after updating
        document.getElementById("todo-update").style.display = "none";
    };

    return (
        <>
        <div className="todo">
            <ToastContainer />
            <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
                <div className="d-flex flex-column todo-inputs-div w-50 p-1">
                    <input
                        type="text"
                        placeholder="TITLE"
                        className="my-2 p-2 todo-inputs"
                        onClick={show}
                        name="title"
                        value={Inputs.title}
                        onChange={change}
                    />
                    <textarea
                        id="textarea"
                        placeholder="BODY"
                        name="body"
                        className="p-2 todo-inputs"
                        value={Inputs.body}
                        onChange={change}
                    />
                </div>
                <div className="w-50 d-flex justify-content-end my-3">
                    <button className="home-btn px-2 py-1" onClick={submit}>
                        Add
                    </button>
                </div>
            </div>
            <div className="todo-body">
                <div className="container-fluid">
                    <div className="row">
                        {Array && Array.map((item, index) => (
                            <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                                <TodoCards
                                    title={item.title}
                                    body={item.body}
                                    id={index}
                                    delid={del}
                                    display={dis}  // Call dis with the index to edit
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
            {editTask && (  // Conditionally render the Update component
    <div className="todo-update" id="todo-update">
        <div className="container">
            <Update 
                task={editTask} 
                updateTask={updateTask} 
            />
        </div>
    </div>
)}

        </>
    );
};

export default Todo;
