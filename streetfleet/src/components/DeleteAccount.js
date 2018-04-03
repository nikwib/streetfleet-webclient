import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import authActions from '../store/actions/auth.actions';
import carsActions from '../store/actions/cars.actions';

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
            <Button onClick={() => this.props.deleteAccount(this.props.company.username)}>Submit</Button>
          </Modal.Footer>
        </Modal>
    )
  }

}

const mapStateToProps = state => ({
  showDeleteAccount: state.auth.showDeleteAccount,
  company: state.auth.company,
});

const mapDispatchToProps = dispatch => ({
  onClose: () => { dispatch(authActions.onClose) },
  deleteAccount: (username) => {
    dispatch(authActions.deleteAccount(username)),
    dispatch(authActions.logout);
    dispatch(carsActions.logout);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);
