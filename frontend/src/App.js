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
/*import React from 'react';
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

export default App;*/
import React from 'react';
import './App.css';
import BingNews from './components/BingNews';
async function searchNews(q) {
  console.log("je passe ds searchNews")
  q = encodeURIComponent(q);
  const response = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&safeSearch=Strict&q=${q}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": "28693d75f2msh563135fbcd26454p13c895jsne56c537a0bf0",
      "x-bingapis-sdk": "true"
    }
  });
  const body = await response.json();
  console.log("body", body)
  return body.value;
}

function App() {
  const [query, setQuery] = React.useState();
  const [list, setList] = React.useState(null);
  let request = "paris";
  let filtre = false

  function recherche(filtre) {
    filtre = true
    console.log("je passe ds recherche")

    return searchNews(request).then(setList);
  }
  // recherche();
  setTimeout(() => { recherche() }, 40000)
  setTimeout(() => { console.log("mon test") }, 30000)

  return (
    <div className="app">

      <BingNews />
    </div>
  );
}

function Item({ item }) {
  const separateWords = s => s.replace(/[A-Z][a-z]+/g, '$& ').trim();
  const formatDate = s => new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });

  return (
    <li className="item">
      {item.image &&
        <img className="thumbnail"
          alt=""
          src={item.image?.thumbnail?.contentUrl}
        />
      }

      <h2 className="title">
        <a href={item.url}>{item.name}</a>
      </h2>

      <p className="description">
        {item.description}
      </p>

      <div className="meta">
        <span>{formatDate(item.datePublished)}</span>

        <span className="provider">
          {item.provider[0].image?.thumbnail &&
            <img className="provider-thumbnail"
              alt=""
              src={item.provider[0].image.thumbnail.contentUrl + '&w=16&h=16'}
            />
          }
          {item.provider[0].name}
        </span>

        {item.category &&
          <span>{separateWords(item.category)}</span>
        }
      </div>
    </li>
  );
}

export default App;