import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { GrDocumentUpdate } from 'react-icons/gr';

const TodoCards = ({ title, body, id, delid, display }) => {
    return (
        <div className='p-3 todo-card'>
            <div>
                <h5>{title}</h5>
                <p className='todo-card-p'>{body.substring(0, 77)}...</p> {/* Use substring for better clarity */}
            </div>
            <div className="d-flex justify-content-around">
                {/* Update button */}
                <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1"
                    onClick={() => {
                        display(id);  // Pass the task ID to display function for updating
                    }}
                    >
                    <GrDocumentUpdate className="card-icons" />
                    Update
                </div>
                {/* Delete button */}
                <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger"
                    onClick={() => { 
                        delid(id);  // Call delid function to delete by ID
                    }}
                    >
                    <AiFillDelete className="card-icons del" />
                    Delete
                </div>
            </div>
        </div>
    );
};

export default TodoCards;
