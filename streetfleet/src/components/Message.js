import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import authActions from './../store/actions/auth.actions';

class Message extends Component {
  render() {
    return (
      <Modal bsSize='small'
        onHide={this.props.onClose}
        show={(this.props.carsMessage.show || this.props.authMessage.show || false)}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.carsMessage.show ?
            this.props.carsMessage.title :
            this.props.authMessage.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> {this.props.carsMessage.show ?
            this.props.carsMessage.message :
            this.props.authMessage.message}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  carsMessage: state.cars.message,
  authMessage: state.auth.message,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => { dispatch(authActions.onClose); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);

