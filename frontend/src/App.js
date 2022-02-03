import React, {useEffect, useState} from 'react';
import './App.css';
import BingNews from './components/BingNews';
import Login from './components/Login';
import Logout from './components/Logout';
import LoginHooks from './components/LoginHooks';
import LogoutHooks from './components/LogoutHooks';
import Mirror from './components/Mirror';


import {BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';

function App() {

    // let timer = new Date().toLocaleTimeString()
    // console.log("timer",timer)
    // function tick() {return this.timer }
    // setInterval(tick, 1000);
    // console.log("je passe apres ")
    // <h2>It is {timer}</h2>
    return (
        <Router>
            <div className="App">
                <div id="root">
                </div>
                <div>
                    <Routes>
                        <Route path='/' element={<LoginHooks/>}/>
                        <Route path='/mirror' element={<Mirror/>}/>
                    </Routes>
                </div>
            </div>
        </Router>)
}

export default App;
