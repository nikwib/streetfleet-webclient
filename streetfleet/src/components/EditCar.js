import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import Actions from '../store/actions/cars.actions';
import '../css/Modals.css'
import type from '../img/icons/type.png';
import make from '../img/icons/make.png';
import model from '../img/icons/model.png';
import year from '../img/icons/year.png';
import license from '../img/icons/license.png';
import mac from '../img/icons/mac.png';

class EditCar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      car: props.car
    };
  }

  componentWillReceiveProps (props) {
    if (props.car) this.setState({car: props.car});
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
      <Modal.Body>
        <form className="ModalsLeft">
          <this.FieldGroup
            id="vTypeField"
            type="text"
            label="Vehicle Type"
            name="vType"
            value={this.state.car.vType}
            onChange={this.onChange}
            className="text-capitalize"style={{
              backgroundImage: `url(${type})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
          <this.FieldGroup
            id="formControlsText"
            type="text"
            label="Make"
            name="make"
            value={this.state.car.make}
            onChange={this.onChange}
            className="text-capitalize"style={{
              backgroundImage: `url(${make})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
          <this.FieldGroup
            id="formControlsText"
            type="text"
            label="Model"
            name="model"
            value={this.state.car.model}
            onChange={this.onChange}
            className="text-capitalize"style={{
              backgroundImage: `url(${model})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
        </form>
        <form className="ModalsRight">
          <this.FieldGroup
            id="formControlsText"
            type="text"
            label="Year"
            name="year"
            value={this.state.car.year}
            onChange={this.onChange}
            className="text-capitalize"style={{
              backgroundImage: `url(${year})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
          <this.FieldGroup
            id="formControlsText"
            type="text"
            label="License Plate"
            name="license_number"
            value={this.state.car.license_number}
            onChange={this.onChange}
            className="text-uppercase"style={{
              backgroundImage: `url(${license})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
          <this.FieldGroup
            id="formControlsText"
            type="text"
            label="Mac Address"
            name="mac_address"
            value={this.state.car.mac_address}
            onChange={this.onChange}
            className="text-uppercase"style={{
              backgroundImage: `url(${mac})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: 32
            }}
          />
        </form>
        <Button className="cancel" onClick={this.props.onClose}>Cancel</Button>
        <Button type="submit" onClick={() => this.props.onEditCar(this.state.car)}>Submit</Button>
      </Modal.Body>
    );

    return (
      <Modal
        className="Modals"
        show={this.props.showEditVehicle}
        onHide={this.props.onClose}
      >
        <h1>Edit</h1>
        {formInstance}
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  showEditVehicle: state.cars.showEditVehicle,
  car: state.cars.car,
});

const mapDispatchToProps = (dispatch) => ({
  onEditCar: (car) => { dispatch(Actions.editCar(car)); },
  onClose: () => { dispatch(Actions.onClose); },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCar);
