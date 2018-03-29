import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import Actions from './../../store/actions/auth.actions';

class CreateAccount extends Component {

  newAccount = {};

  onChange = (e) => {
    this.newAccount[e.target.name] = e.target.value;
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createAccount(this.newAccount);
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
    return (
      <div className="Login CreateAccount">
        <h2>Register</h2>
        <small>You have registered already? <a> Login</a></small>
        <form className="FormLeft">
          <FormControl
            id="formControlsCompany"
            type="text"
            name="company_name"
            onChange={this.onChange}
            placeholder="Company"
          />
          <FormControl
            id="formControlsText"
            type="text"
            name="username"
            onChange={this.onChange}
            placeholder="User Name"
          />
        </form>
        <form className="FormRight">
          <FormControl
            id="formControlsEmail"
            type="email"
            name="email"
            onChange={this.onChange}
            placeholder="Email address"
          />
          <FormControl
            id="formControlsPassword"
            type="password"
            name="password"
            onChange={this.onChange}
            placeholder="Password"
          />
        </form>
        <Button bsSize="small" className="cancel" onClick={this.props.onClose}>Cancel</Button>
        <Button bsSize="small" type="submit" onClick={this.onSubmit}>Submit</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showSignUp: state.auth.showSignUp,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => { dispatch(Actions.onClose); },
  createAccount: (newAccount) => { dispatch(Actions.createAccount(newAccount)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
