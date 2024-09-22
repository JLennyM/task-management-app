import React from "react";
import "./Home.css";
const Home = () =>{
    return(
        <div className="home d-flex justify-content align-items-center">
            <div className="container d-flex justify-content align-items-center flex-column">
                <h1>Organize your <br/>work and Life ,finally.</h1>
                <p>Become focused Organized,and calm with<br/>todo App.The World's #1 Task Manager App</p>
                <button class="home-btn p-2">Make ToDo List</button>
            </div>
        </div>
        
    );
};
export default Home;