import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import authActions from './../../store/actions/auth.actions';

class Login extends Component {

  login = {};

  onChange = (e) => {
    this.login[e.target.name] = e.target.value;
  }

  onSubmit = (e) => {
    const b64encode = btoa(this.login.username + ':' + this.login.password);
    this.props.login(b64encode);
  }

  render() {
    return (
      <div className="Login">
        <h2>Login</h2>
        <small>You don’t have an account?  <a onClick={this.props.onToggleLogin}>Register</a></small>
        <form>
          <FormControl
            id="formControlsText"
            type="text"
            name="username"
            onChange={this.onChange}
            placeholder="User Name"
          />
          <FormControl
            id="formControlsPassword"
            type="password"
            name="password"
            onChange={this.onChange}
            placeholder="Password"
          />
        </form>
        <Button bsSize="small" onClick={this.onSubmit}><Link to="/FleetOverview">Submit</Link></Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (b64encode) => { dispatch(authActions.login(b64encode)); },
});

export default connect(null, mapDispatchToProps)(Login);
