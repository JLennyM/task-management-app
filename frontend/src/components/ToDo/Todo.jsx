import React, { useState } from "react";
import './Todo.css';
import TodoCards from "./TodoCards";

const ToDo = () => {
    // Handling inputs for title and body
    const [inputs, setInputs] = useState({ title: "", body: "" });
    
    // Use array to store the list of todos
    const [todoArray, setTodoArray] = useState([]);

    // Function to handle changes in input fields
    const change = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    };

    // Function to display the textarea
    const show = () => {
        document.getElementById("textarea").style.display = "block";
    };

    // Function to submit a new todo
    const submit = () => {
        // Appending the new todo to the existing array
        setTodoArray([...todoArray, inputs]); 
        // Reset input fields
        setInputs({ title: "", body: "" });
    };

    return (
        <div className="todo">
            <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
                <div className="d-flex flex-column todo-inputs-div w-50">
                    <input 
                        type="text" 
                        placeholder="Title"
                        className="my-2 p-2 todo-inputs"
                        onClick={show}
                        name="title"
                        value={inputs.title}  
                        onChange={change}
                    />
                    <textarea 
                        id="textarea"
                        type="text" 
                        placeholder="Body" 
                        name="body"
                        className="p-2 todo-inputs"
                        value={inputs.body}  
                        onChange={change}
                    />
                    <div className="w-50 d-flex justify-content-end my-3">
                        <button className="home-btn px-2 py-1" onClick={submit}>Add</button>
                    </div>
                </div>
            </div>
            <div className="todo-body">
                <div className="container-fluid">
                    <div className="row">
                        {todoArray.length > 0 ? (
                            todoArray.map((item, index) => (
                                <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                                    <TodoCards 
                                        title={item.title} 
                                        body={item.body} 
                                    />
                                </div> 
                            ))
                        ) : (
                            <p>No tasks added yet!</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDo;
