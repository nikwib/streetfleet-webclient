import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import carsActions from './../store/actions/cars.actions';
import '../css/Modals.css'
import type from '../img/icons/type.png';
import make from '../img/icons/make.png';
import model from '../img/icons/model.png';
import year from '../img/icons/year.png';
import license from '../img/icons/license.png';
import mac from '../img/icons/mac.png';

class AddCar extends Component {

  car = {};

  onChange = (e) => {
    this.car[e.target.name] = e.target.value;
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
      <Modal.Body>
        <form className="ModalsLeft">
          <this.FieldGroup
            id="formControlsText"
            type="text"
            placeholder="Vehicle Type"
            name="vType"
            onChange={this.onChange}
            style={{
              backgroundImage: `url(${type})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
          <this.FieldGroup
            id="formControlsText"
            type="text"
            placeholder="Make"
            name="make"
            onChange={this.onChange}
            style={{
              backgroundImage: `url(${make})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
          <this.FieldGroup
            id="formControlsText"
            type="text"
            placeholder="Model"
            name="model"
            onChange={this.onChange}
            style={{
              backgroundImage: `url(${model})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
        </form>
        <form className="ModalsRight">
          <this.FieldGroup
            id="formControlsText"
            type="number"
            placeholder="Year"
            name="year"
            onChange={this.onChange}
            style={{
              backgroundImage: `url(${year})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
          <this.FieldGroup
            id="formControlsText"
            type="text"
            placeholder="License Plate"
            name="license_number"
            onChange={this.onChange}
            style={{
              backgroundImage: `url(${license})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
          <this.FieldGroup
            id="formControlsText"
            type="text"
            placeholder="Mac Address"
            name="mac_address"
            onChange={this.onChange}
            style={{
              backgroundImage: `url(${mac})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
        </form>
        <Button className="cancel" onClick={this.props.onClose}>Cancel</Button>
        <Button onClick={() => this.props.onAddCar(this.car)}>Submit</Button>
      </Modal.Body>
    );

    return (
      <Modal
        className="Modals"
        show={this.props.showAddVehicle}
        onHide={this.props.onClose}
      >
        <h1>Add</h1>
        {formInstance}
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  showAddVehicle: state.cars.showAddVehicle,
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => { dispatch(carsActions.onClose); },
  onAddCar: (car) => { dispatch(carsActions.addCar(car)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCar);
