import React from "react";
import "./Navbar.css";
import { GiWhiteBook } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/"><b>
                    <GiWhiteBook/> &nbsp;TODO</b></Link>
                    
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                            </li>

                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/todo">ToDo</Link>
                            </li>

                            <li className="nav-item mx-2">
                                <Link className="nav-link active btn-nav" aria-current="page" to="/signup">SignUp</Link>
                            </li>

                            <li className="nav-item mx-2">
                                <Link className="nav-link active btn-nav" aria-current="page" to="/signin">SignIn</Link>
                            </li>

                            <li className="nav-item mx-2">
                                <Link className="nav-link active btn-nav" aria-current="page" to="/logout">Log Out</Link>
                            </li>

                            <li className="nav-item mx-2">
                                <Link className="nav-link active " aria-current="page" to="#">
                                    <img className="img-fluid user-png" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="User"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
