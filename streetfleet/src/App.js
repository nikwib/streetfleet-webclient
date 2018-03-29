import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './containers/NavBar';
import HomePage from './components/HomePage/HomePage';
import FleetOverview from './components/FleetOverview/FleetOverview';
import MapView from './components/MapView/MapView';
import CarLog from './components/CarLog/CarLog';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
        <NavBar/>
        </div>
        <Route exact path="/" component={HomePage} />
        <Route path="/FleetOverview" component={FleetOverview} />
        <Route path="/MapView" component={MapView} />
        <Route path="/CarLog/:id" component={CarLog} />
      </div>
    );
  }
}

export default App;
