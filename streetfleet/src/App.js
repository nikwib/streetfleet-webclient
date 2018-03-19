import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';

class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <NavBar />
        </div>
        <HomePage />
      </div>
    );
  }
}

export default App;
