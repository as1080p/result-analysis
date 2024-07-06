import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Teacher from './Components/Pages/Teacher';
import Student from './Components/Pages/Student';
import STprofile from './Components/Pages/STprofile';
import Admin from './Components/Pages/Admin';
import Profile from './Components/Pages/Profile';
function App() {
  return (
    <>
    
  
   
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/"  exact Component={Home}/>
        
        <Route path="/student" Component={Student}/>
        
        <Route path="/stprofile" Component ={STprofile}/>
        <Route path="/teacher" Component={Teacher}/>
        <Route path="admin" Component={Admin}/>
        <Route path="/profile"Component={Profile}/>
      </Routes>
    </Router>
  

    
  





  </>

    
  );
}

export default App;


