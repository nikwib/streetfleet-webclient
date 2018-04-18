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

  input = (title, name, icon, type = 'text') => (
    <this.FieldGroup
      id={name}
      type={type}
      name={name}
      onChange={this.onChange}
      placeholder={title}
      style={{
        backgroundImage: `url(${icon})`,
        backgroundRepeat: 'no-repeat',
        paddingLeft: 32
      }}
    />
  )

  render() {
    return (
      <div className='Login CreateAccount'>
        <h2>Register</h2>
        <small>Already registered? <a onClick={this.props.onToggleLogin}> Login</a></small>
        <form className='FormLeft'>
          {this.input('Company', 'company_name', company)}
          {this.input('Username', 'username', user)}
        </form>
        <form className='FormRight'>
          {this.input('Email', 'email', email)}
          {this.input('Password', 'password', password)}
        </form>
        <Button bsSize='small' onClick={() => this.props.createAccount(this.newAccount)}>Submit</Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createAccount: (newAccount) => { dispatch(Actions.createAccount(newAccount)); },
});

export default connect(null, mapDispatchToProps)(CreateAccount);
