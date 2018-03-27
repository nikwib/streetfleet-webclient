import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import Actions from '../../store/actions/cars.actions';


class Failure extends Component {
  render() {
    return (
      <Modal bsSize="small"
        onHide={this.props.onCancel}
        show={this.props.showEditVehicleFailure}>
        <Modal.Header closeButton>
          <Modal.Title>Ohh no!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Something went wrong, please try again. </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onCancel}>Ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  showEditVehicleFailure: state.cars.showEditVehicleFailure,
});

const mapDispatchToProps = (dispatch) => ({
  onCancel: () => { dispatch(Actions.onCancel) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Failure);
