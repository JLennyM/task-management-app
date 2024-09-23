import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr"

const TodoCards = ({ title, body }) => {
    const maxBodyLength = 150; // Set a limit for the body text length
    const displayBody = body.length > maxBodyLength ? body.substring(0, maxBodyLength) + '...' : body;

    return (
        <div className='p-3 todo-card'>
            <div>
                <h5>{title}</h5>
                <p className='todo-card-p'>
                    {displayBody}
                </p>
            </div>
            <div className='d-flex justify-cotent-around'>
            <div className='d-flex justify-content-around align-items-center card-icon-head px-2 py-1 text-bold'>
                   <GrDocumentUpdate className='card-icons' />
                    Update
                </div>
                <div className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger'>
                    <AiFillDelete className='card-icons del' />
                    Delete
                </div>
            </div>
        </div>
    );
};

export default TodoCards;
