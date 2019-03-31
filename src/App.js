import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends Component {
  test = () => {
    Axios.get('/api/test').then((resp) => {
      console.log(resp);
    })
  }
  render() {
    return (
      <div className="App">
       <button onClick={() => this.test()}>CLICK ME</button>
      </div>
    );
  }
}

export default App;
