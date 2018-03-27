import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import Actions from '../store/actions/auth.actions';

class EditAccount extends Component {
  state = {
    company: this.props.company
  }

  componentDidMount () {
    this.props.getAccount(this.props.username);
  }

  componentWillReceiveProps (props) {
    this.setState({company: props.company});
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

  render () {
    const formInstance = (
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
          type="text"
          label="New password"
          name="password"
          onChange={this.onChange}
          className=""
        />
      </form>
    )
    return (
      <Modal
        bsSize="small"
        show={this.props.showEditAccount}
        onHide={this.props.onClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formInstance}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onClose}>Cancel</Button>
          <Button type="submit" onClick={() => this.props.editAccount(this.state.company)}>Submit</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  showEditAccount: state.auth.showEditAccount,
  username: state.auth.username,
  company: state.auth.company
})

const mapDispatchToProps = dispatch => ({
  getAccount: (username) => { dispatch(Actions.getAccount(username))},
  onClose: () => { dispatch(Actions.onClose)},
  editAccount: company => { dispatch(Actions.editAccount(company))}
})

export default connect(mapStateToProps, mapDispatchToProps)(EditAccount);
