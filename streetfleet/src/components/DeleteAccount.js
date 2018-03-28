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
        </Modal>
    )
  }

}

const mapStateToProps = state => {
  showDeleteAccount: state.auth.showDeleteAccount
}

const mapDispatchToProps = dispatch => {
  onClose: () => { dispatch(Actions.onClose) }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccount);
