import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import Actions from './../store/actions/auth.actions';

class NewUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.newAccount = {
      company_name: '',
      username: '',
      email: '',
      password: '',
    }
  }

  onChange = (e) => {
    this.newAccount[e.target.name] = e.target.value;
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createAccount(this.newAccount);
    this.setState({
      open: false,
    });
  }

  FieldGroup = ({ id, label, ...props }) => {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
      </FormGroup>
    );
  }

  render() {
    const formInstance = (
      <form >
        <this.FieldGroup
          id="formControlsCompany"
          type="text"
          label="Company"
          name="company_name"
          onChange={this.onChange}
          placeholder="Enter company name"
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="User Name"
          name="username"
          onChange={this.onChange}
          placeholder="Enter your user name"
        />
        <this.FieldGroup
          id="formControlsEmail"
          type="email"
          label="Email address"
          name="email"
          onChange={this.onChange}
          placeholder="Enter email address"
        />
        <this.FieldGroup
          id="formControlsPassword"
          type="password"
          label="Password"
          name="password"
          onChange={this.onChange}
        />
      </form>
    );
    return (
      <Modal bsSize="small" onHide={this.props.handleClose} show={this.props.showModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formInstance}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Cancel</Button>
          <Button type="submit" onClick={this.onSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.auth.fetching,
  loggedIn: state.auth.loggedIn,
  showModal: state.auth.showSignUp,
  signUpSuccess: state.auth.signUpSuccess,
  signUpFailure: state.auth.signUpFailure,
});

const mapDispatchToProps = (dispatch) => ({
  showSignUp: () => { dispatch(Actions.showSignUp) },
  cancelSignUp: () => { dispatch(Actions.cancelSignUp) },
  createAccount: (newAccount) => { dispatch(Actions.createAccount(newAccount)) },

});

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);

