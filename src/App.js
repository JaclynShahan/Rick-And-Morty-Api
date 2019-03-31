import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import CharacterSearch from './components/characterSearch/characterSearch.js';

class App extends Component {
  test = () => {
    Axios.get('/api/test').then((resp) => {
      console.log(resp);
    })
  }
  render() {
    return (
      <div className="App">

     <CharacterSearch  />
        
      </div>
    );
  }
}

export default App;
