import React from 'react';
import './App.css';
import BingNews from './components/BingNews';
import "@progress/kendo-theme-default/dist/all.css";
import { Scheduler, AgendaView } from "@progress/kendo-react-scheduler";
import { sampleData, displayDate } from "./events-utc";
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
      <Scheduler data={sampleData} defaultDate={displayDate}>
      <AgendaView
        title="Compact View"
        step={1}
        numberOfDays={1}
        selectedDateFormat={"From: {0:D} To: {1:D}"}
        selectedShortDateFormat={"From: {0:d} To: {1:d}"}
      />
    </Scheduler>
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