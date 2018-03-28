import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import Actions from '../store/actions/auth.actions';

class DeleteAccount extends Component {

  render() {

    return (
      <Modal
        bsSize="small"
        show={this.props.showDeleteAccount}
        onHide={this.props.onClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete my account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You are going to delete your account; all your data will be destroyed. Are you sure?
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onClose}>Cancel</Button>
            <Button onClick={() => this.props.deleteAccount(this.props.username)}>Submit</Button>
          </Modal.Footer>
        </Modal>
    )
  }

}

const mapStateToProps = state => ({
  showDeleteAccount: state.auth.showDeleteAccount,
  username: state.auth.username,
});

const mapDispatchToProps = dispatch => ({
  onClose: () => { dispatch(Actions.onClose) },
  deleteAccount: (username) => { dispatch(Actions.deleteAccount(username)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);
