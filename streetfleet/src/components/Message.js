import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import carsActions from './../store/actions/cars.actions';
import authActions from './../store/actions/auth.actions';

class Message extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      message: '',
    };
  }

  componentWillReceiveProps = (props) => {
    if (props.carsMessage.show) {
      this.setState({
        title: props.carsMessage.title,
        message: props.carsMessage.message,
      });
    } else {
      this.setState({
        title: props.authMessage.title,
        message: props.authMessage.message,
      });
    }
  }
  
  render() {
    return (
      <Modal bsSize='small'
        onHide={this.props.onClose}
        show={(this.props.carsMessage.show || this.props.authMessage.show || false)}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> {this.state.message} </p>
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
  onClose: () => {
    dispatch(carsActions.onClose);
    dispatch(authActions.onClose);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);

