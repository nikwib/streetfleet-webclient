import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { subscribeToTimer } from './api';
import NavBar from './containers/NavBar';
import HomePage from './components/HomePage';
import FleetOverview from './components/FleetOverview';
import MapView from './components/MapView';
import CarLog from './components/CarLog';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    subscribeToTimer((err, timestamp) => console.log(timestamp));
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <NavBar />
        </div>
        <Route exact path="/" component={HomePage}/>
        <Route path="/FleetOverview" component={FleetOverview}/>
        <Route path="/MapView" component={MapView}/>
        <Route path="/CarLog" component={CarLog}/>
      </div>
    );
  }
}

export default App;
