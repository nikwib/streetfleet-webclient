import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import Actions from '../../store/actions/auth.actions';


class Success extends Component {
  render() {
    return (
      <Modal bsSize="small"
        onHide={this.props.closeSignUpSuccess}
        show={this.props.signUpSuccess}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Account successfully created, please login to get started</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeSignUpSuccess}>Ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  signUpSuccess: state.auth.signUpSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  closeSignUpSuccess: () => { dispatch(Actions.closeSignUpSuccess) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Success);

