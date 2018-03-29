import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import Actions from '../store/actions/auth.actions';
import '../css/Modals.css'

class EditAccount extends Component {
  state = {
    company: {}
  }

  componentWillReceiveProps (props) {
    props.company ? this.setState({company: props.company}) : null;
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
    const formInstance = (
      <Modal.Body  className="EditModal">
        <form>
          <this.FieldGroup
            id="formControlsText"
            type="text"
            label="Company name"
            name="company_name"
            value={this.state.company.company_name}
            onChange={this.onChange}
            className=""
          />
          <this.FieldGroup
            id="formControlsText"
            type="text"
            label="Username"
            name="username"
            value={this.state.company.username}
            onChange={this.onChange}
            className=""
          />

          <this.FieldGroup
            id="formControlsText"
            type="text"
            label="Email"
            name="email"
            value={this.state.company.email}
            onChange={this.onChange}
            className=""
          />
          <this.FieldGroup
            id="formControlsText"
            type="password"
            label="Old password"
            name="old_password"
            onChange={this.onChange}
            className=""
          />
          <this.FieldGroup
            id="formControlsText"
            type="password"
            label="New password"
            name="new_password"
            onChange={this.onChange}
            className=""
          />
        </form>
        <Button className="cancel" onClick={this.props.onClose}>Cancel</Button>
        <Button type="submit" onClick={() => this.props.editAccount(this.state.car)}>Submit</Button>
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
