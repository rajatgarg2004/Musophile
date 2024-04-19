import './App.css';
import React from 'react';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Elite from "./Components/Elite";
import Player123 from './Components/Player123';
import SignUp from './Components/SignUp';
import Search from "./Components/Search";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Elite" element={<Elite />}/>
          <Route path ="/SignUp" element ={<SignUp />} />
          <Route path ="/Home" element ={<Home />} />
          <Route path ="/Player123" element ={<Player123 />} />
          <Route path="/" element = {<Search />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
