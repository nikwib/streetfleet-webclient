import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
//import Loader from 'react-loaders'


import CreateAccount from './components/CreateAccount/Create';
import CreateAccountSuccess from './components/CreateAccount/Success';
import CreateAccountFailure from './components/CreateAccount/Failure';
import NavBar from './containers/NavBar';
import HomePage from './components/HomePage';
import FleetOverview from './components/FleetOverview';
import MapView from './components/MapView';
import CarLog from './components/CarLog';
import Actions from './store/actions/auth.actions';

// import PageNotFound from './components/PageNotFound';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <NavBar />
        </div>
        <CreateAccount show={this.props.showSignUp} />
        <CreateAccountSuccess show={this.props.signUpSuccess} />
        <CreateAccountFailure show={this.props.signUpFailure} />
        <Route exact path="/" component={HomePage} />
        <Route path="/FleetOverview" component={FleetOverview} />
        <Route path="/MapView" component={MapView} />
        <Route path="/CarLog/:id" component={CarLog} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.auth.fetching,
  showSignUp: state.auth.showSignUp,
  signUpSuccess: state.auth.signUpSuccess,
  signUpFailure: state.auth.signUpFailure,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);

