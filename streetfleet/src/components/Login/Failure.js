import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import Actions from '../../store/actions/auth.actions';

class Failure extends Component {
  render() {
    return (
      <Modal bsSize="small"
        onHide={this.props.onCancelLogin}
        show={this.props.showLoginFailure}>
        <Modal.Header closeButton>
          <Modal.Title>Ohh no!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Login failed, please try again!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onCancelLogin}>Ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  showLoginFailure: state.auth.showLoginFailure,
});

const mapDispatchToProps = (dispatch) => ({
  onCancelLogin: () => { dispatch(Actions.onCancelLogin); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Failure);