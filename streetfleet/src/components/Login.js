import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import authActions from './../store/actions/auth.actions';

class Login extends Component {

  constructor(props) {
    super(props);
    this.login = {
      username: '',
      password: '',
    };
  }

  onChange = (e) => {
    this.login[e.target.name] = e.target.value;
  }

  onSubmit = (e) => {
    e.preventDefault();
    const b64encode = window.btoa(this.login.username + ':' + this.login.password);
    this.props.login(b64encode);
  }

  render() {
    return (
      <Modal className="Login" bsSize="small"
        show={this.props.showLogin}
        onHide={this.props.onClose} >
        <Modal.Body>
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
        </Modal.Body>
        <Button bsSize="small" type="submit" onClick={this.onSubmit}>Submit</Button>
        <Button bsSize="small" onClick={this.props.onClose}>Cancel</Button>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  showLogin: state.auth.showLogin,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => { dispatch(authActions.onClose); },
  login: (b64encode) => { dispatch(authActions.login(b64encode)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);


