import React, {Component} from 'react';
import { Modal, Button } from 'react-bootstrap';

class Success extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <Modal
        bsSize="small"
        show={this.props.showSuccess}
        onHide={this.props.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Alert!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{this.props.message}</p>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={this.props.handleClose}>Ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Success;
