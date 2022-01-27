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

function App() {
  return (
    <div className="App">
      <h2>The Components way</h2>
      <Login />
      <br />
      <Logout />
      <h2>The Hooks way</h2>
      <LoginHooks />
      <LogoutHooks />
      <br />
    </div>
  );
}

export default App;
