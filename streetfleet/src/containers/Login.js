import React, { Component } from 'react';
import { connect } from 'react-redux';

import Actions from './../store/actions/auth.actions';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class Login extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ''
    };
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
    const b64encode = window.btoa(this.login.username + ':' + this.login.password)
    this.props.login(b64encode);
    this.props.handleClose();
  }

  FieldGroup = ({ id, label, help, ...props }) => {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
      </FormGroup>
    );
  }

  render() {
    const formInstance = (
      <form>
        <this.FieldGroup
          id="formControlsText"
          type="text"
          name="username"
          onChange={this.onChange}
          placeholder="User Name"
        />
        <this.FieldGroup
          id="formControlsPassword"
          type="password"
          name="password"
          onChange={this.onChange}
          placeholder="Password"
        />
      </form>
    );
    return (
      <Modal
        className="Login"
        bsSize="small"
        show={this.props.showLogin}
      >
        <Modal.Body>
          {formInstance}
        </Modal.Body>
        <Button bsSize="small" onClick={this.props.handleClose}>Cancel</Button>
        <Button bsSize="small" type="submit" onClick={this.onSubmit}>Submit</Button>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  login: (b64encode) => { dispatch(Actions.login(b64encode)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

