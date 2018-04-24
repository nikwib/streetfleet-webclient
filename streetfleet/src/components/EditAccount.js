import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import Actions from '../store/actions/auth.actions';
import company from '../img/icons/company.png';
import user from '../img/icons/user.png';
import email from '../img/icons/email.png';
import password from '../img/icons/password.png';
import '../css/Modals.css';

const snakeCase = (str) => {
  str = str[0].toLowerCase() + str.substr(1).toLowerCase();
  return str.replace(' ', '_');
};

class EditAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: { 
        company_name: props.company.company_name,
        username: props.company.username,
        email: props.company.email,
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.company !== nextProps.company) {
      nextProps.company && this.setState({ company: nextProps.company });
    }
  }

  onChange = (e) => {
    this.setState({
      company: {
        ...this.state.company,
        [e.target.name]: e.target.value
      }
    });
  }

  input = (title, icon, initialValue, type = 'text') => (
    <FormGroup controlId={snakeCase(title)}>
      <ControlLabel>{title}</ControlLabel>
      <FormControl
        type={type}
        value={initialValue}
        name={snakeCase(title)}
        onChange={this.onChange}
        className='text-capitalize'
        style={{
          backgroundImage: `url(${icon})`,
          backgroundRepeat: 'no-repeat',
          paddingLeft: 32
        }}
      />
    </FormGroup>
  )

  render() {
    const formInstance = (
      <Modal.Body className='EditModal'>
        <form>
          {this.input('Company name', company, this.state.company.company_name)}
          {this.input('Username', user, this.state.company.username)}
          {this.input('Email', email, this.state.company.email)}
          {this.input('Old password', password, undefined, 'password')}
          {this.input('New password', password, undefined, 'password')}
        </form>
        <Button className='cancel' onClick={this.props.onClose}>Cancel</Button>
        <Button onClick={() => this.props.editAccount(this.state.company)}>Submit</Button>
      </Modal.Body>
    );

    return (
      <Modal
        bsSize='small'
        className='Modals'
        show={this.props.showEditAccount}
        onHide={this.props.onClose}
      >
        <h1>Edit</h1>
        {formInstance}
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  showEditAccount: state.auth.showEditAccount,
  company: state.auth.company,
});

const mapDispatchToProps = dispatch => ({
  onClose: () => { dispatch(Actions.onClose); },
  editAccount: company => { dispatch(Actions.editAccount(company)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAccount);
