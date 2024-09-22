import React from 'react';
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from './components/About/About';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Signup from './components/SignUp/SignUp';
import SignIn from './components/SignUp/SignIn';
import Todo from './components/ToDo/Todo';


const App = () =>{
  return(
    <div>
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route exact path="/todo" element={<Todo/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/signin" element={<SignIn/>}/>
      <Route exact path="/logout" element={<Home/>}/>
      
      
      </Routes>
      </Router>
      <Footer/>
      </div>
  );
};
export default App