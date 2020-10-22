import React from 'react';
import './App.css';
import logo from './logo.svg';
import Search from './components/Search/Search.js';
import Results from './components/Results/Results';

function Home() {
  return <div>
    <h2>Hello World</h2>
    <img src="{logo}" alt=""/>
    <Search />
  </div>
}

export default Home;
