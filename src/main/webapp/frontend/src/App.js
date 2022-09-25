import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/home').then((res) => setData(res.data)).catch((e) => console.log(e))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
