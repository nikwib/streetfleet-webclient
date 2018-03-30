import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import Actions from './../../store/actions/auth.actions';
import company from '../../img/icons/company.png';
import user from '../../img/icons/user.png';
import email from '../../img/icons/email.png';
import password from '../../img/icons/password.png';

class CreateAccount extends Component {

  newAccount = {};

  onChange = (e) => {
    this.newAccount[e.target.name] = e.target.value;
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
        <small>Already registered? <a onClick={this.props.onToggleLogin}> Login</a></small>
        <form className="FormLeft">
          <FormControl
            id="formControlsCompany"
            type="text"
            name="company_name"
            onChange={this.onChange}
            placeholder="Company"
            style={{
              backgroundImage: `url(${company})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
          <FormControl
            id="formControlsText"
            type="text"
            name="username"
            onChange={this.onChange}
            placeholder="User Name"
            style={{
              backgroundImage: `url(${user})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
        </form>
        <form className="FormRight">
          <FormControl
            id="formControlsEmail"
            type="email"
            name="email"
            onChange={this.onChange}
            placeholder="Email address"
            style={{
              backgroundImage: `url(${email})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
          <FormControl
            id="formControlsPassword"
            type="password"
            name="password"
            onChange={this.onChange}
            placeholder="Password"
            style={{
              backgroundImage: `url(${password})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
        </form>
        <Button bsSize="small" onClick={() => this.props.createAccount(this.newAccount)}>Submit</Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createAccount: (newAccount) => { dispatch(Actions.createAccount(newAccount)); },
});

export default connect(null, mapDispatchToProps)(CreateAccount);
