import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import carsActions from '../../store/actions/cars.actions';


class Success extends Component {
  render() {
    return (
      <Modal bsSize="small"
        onHide={this.props.onCancel}
        show={this.props.showAddVehicleSuccess}>
        <Modal.Header closeButton>
          <Modal.Title>Yes!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Your new vehicle has been added. </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onCancel}>Ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  showAddVehicleSuccess: state.cars.showAddVehicleSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  onCancel: () => { dispatch(carsActions.onCancel) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Success);

