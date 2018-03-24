import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import Actions from '../../store/actions/auth.actions';


class Failure extends Component {
  render() {
    return (
      <Modal bsSize="small"
        onHide={this.props.closeSignUpFailure}
        show={this.props.signUpFailure}>
        <Modal.Header closeButton>
          <Modal.Title>Ohh no!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Pardon us. Account creation failed, please try again!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeSignUpFailure}>Ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  signUpFailure: state.auth.signUpFailure,
});

const mapDispatchToProps = (dispatch) => ({
  closeSignUpFailure: () => { dispatch(Actions.closeSignUpFailure) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Failure);

