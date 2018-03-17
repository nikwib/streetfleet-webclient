import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar';

class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <NavBar/>
        </div>
      </div>
    );
  }
}

export default App;
