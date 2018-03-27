import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import Actions from '../../store/actions/cars.actions';


class Success extends Component {
  render() {
    return (
      <Modal bsSize="small"
        onHide={this.props.onCancel}
        show={this.props.showEditVehicleSuccess}>
        <Modal.Header closeButton>
          <Modal.Title>Yes!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Your vehicle has been edited. </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onCancel}>Ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  showEditVehicleSuccess: state.cars.showEditVehicleSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  onCancel: () => { dispatch(Actions.onCancel) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Success);
