//import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
//import './App.css';
//
//function App() {
//  const [currentTest, setTest] = useState(0);
//
//  useEffect(() => {
// /*   fetch('/time')
//    .then(res => res.json()).then(data => {
//      setCurrentTime(data.time);
//    });*//**//**//**//**//**//**//**//**//**//**//**//**//**//**//**//*
//     fetch('/test2')
//    .then(res => res.json()).then(data => {
//    console.log("data",data)
//      setTest(data.name);
//    });
//  }, []);
//
//  return (
//    <div className="App">
//      <header className="App-header">
//
//        ... no changes in this part ...
//
//        <p>my name is {currentTest}.</p>
//      </header>
//    </div>
//  );
//}
//
//export default App;*/
import React from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import LoginHooks from './components/LoginHooks';
import LogoutHooks from './components/LogoutHooks';
import Mirror from './components/Mirror';
import {BrowserRouter as Router, Route, Routes,Link, Navigate } from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className="App">
        <h1>mon titre </h1>
        <div >
            <Routes>
                <Route path='/' element={<LoginHooks />}/>
                <Route path='/logout'  element={<LogoutHooks/>}/>
                <Route path='/mirror'  element={<Mirror/>}/>
            </Routes>
        </div>
    </div>
  </Router>


  );

}

export default App;
