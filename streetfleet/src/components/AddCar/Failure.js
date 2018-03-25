import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import carsActions from '../../store/actions/cars.actions';


class Failure extends Component {
  render() {
    return (
      <Modal bsSize="small"
        onHide={this.props.onCancel}
        show={this.props.showAddVehicleFailure}>
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
  showAddVehicleFailure: state.cars.showAddVehicleFailure,
});

const mapDispatchToProps = (dispatch) => ({
  onCancel: () => { dispatch(carsActions.onCancel) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Failure);

