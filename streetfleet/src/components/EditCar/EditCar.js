import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import Actions from '../../store/actions/cars.actions';


class EditCar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      car: props.car
    }
  }

  componentWillReceiveProps (props) {
    this.setState({car: props.car})
  }

  onChange = (e) => {
    this.setState({
      car:{
        ...this.state.car,
        [e.target.name]: e.target.value
      }
    });
  }

  FieldGroup = ({ id, label, ...props }) => {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
      </FormGroup>
    );
  }

  render() {
    const formInstance = (
      <form>
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Vehicle Type"
          name="vType"
          value={this.state.car.vType}
          onChange={this.onChange}
          className="text-capitalize"
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Make"
          name="make"
          value={this.state.car.make}
          onChange={this.onChange}
          className="text-capitalize"
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Model"
          name="model"
          value={this.state.car.model}
          onChange={this.onChange}
          className="text-capitalize"
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Year"
          name="year"
          value={this.state.car.year}
          onChange={this.onChange}
          className="text-capitalize"
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="License Plate"
          name="license_number"
          value={this.state.car.license_number}
          onChange={this.onChange}
          className="text-uppercase"
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Mac Address"
          name="mac_address"
          value={this.state.car.mac_address}
          onChange={this.onChange}
          className="text-uppercase"
        />
      </form>
    );
    return (
      <Modal
        bsSize="small"
        show={this.props.showEditVehicle}
        onHide={this.props.onClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formInstance}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onClose}>Cancel</Button>
          <Button type="submit" onClick={() => this.props.onEditCar(this.state.car)}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  showEditVehicle: state.cars.showEditVehicle,
  car: state.cars.car,
});

const mapDispatchToProps = (dispatch) => ({
  onEditCar: (car) => { dispatch(Actions.editCar(car)) },
  onClose: () => { dispatch(Actions.onClose) },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCar);
