import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import Actions from '../store/actions/auth.actions';
import company from '../img/icons/company.png';
import user from '../img/icons/user.png';
import email from '../img/icons/email.png';
import password from '../img/icons/password.png';
import '../css/Modals.css'

class EditAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      company: {
        username: '',
        email: '',
        company_name: ''
      }
    };
  }
  componentWillReceiveProps(props) {
    props.company ? this.setState({ company: props.company }) : null;
  }

  onChange = (e) => {
    this.setState({
      company: {
        ...this.state.company,
        [e.target.name]: e.target.value
      }
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
    console.log(this.state);
    const formInstance = (
      <Modal.Body className="EditModal">
        <form>
          <this.FieldGroup
            id="formControlsText1"
            type="text"
            label="Company name"
            name="company_name"
            value={this.state.company.company_name}
            onChange={this.onChange}
            className="text-capitalize"
            style={{
              backgroundImage: `url(${company})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
          <this.FieldGroup
            id="formControlsText2"
            type="text"
            label="Username"
            name="username"
            value={this.state.company.username}
            onChange={this.onChange}
            className="text-capitalize"
            style={{
              backgroundImage: `url(${user})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />

          <this.FieldGroup
            id="formControlsText3"
            type="text"
            label="Email"
            name="email"
            value={this.state.company.email}
            onChange={this.onChange}
            className="text-lowercase"
            style={{
              backgroundImage: `url(${email})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
          <this.FieldGroup
            id="formControlsText4"
            type="password"
            label="Old password"
            name="old_password"
            onChange={this.onChange}
            style={{
              backgroundImage: `url(${password})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
          <this.FieldGroup
            id="formControlsText5"
            type="password"
            label="New password"
            name="new_password"
            onChange={this.onChange}
            style={{
              backgroundImage: `url(${password})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
        </form>
        <Button className="cancel" onClick={this.props.onClose}>Cancel</Button>
        <Button onClick={() => this.props.editAccount(this.state.company)}>Submit</Button>
      </Modal.Body>
    );

    return (
      <Modal
        bsSize="small"
        className="Modals"
        show={this.props.showEditAccount}
        onHide={this.props.onClose}
      >
        <h1>Edit</h1>
        {formInstance}
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  showEditAccount: state.auth.showEditAccount,
  company: state.auth.company,
})

const mapDispatchToProps = dispatch => ({
  onClose: () => { dispatch(Actions.onClose) },
  editAccount: company => { dispatch(Actions.editAccount(company)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditAccount);
