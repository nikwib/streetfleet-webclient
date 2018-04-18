import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import carsActions from './../store/actions/cars.actions';
import '../css/Modals.css';
import vType from '../img/icons/type.png';
import make from '../img/icons/make.png';
import model from '../img/icons/model.png';
import year from '../img/icons/year.png';
import license from '../img/icons/license.png';
import mac from '../img/icons/mac.png';

class AddCar extends Component {
  state = { car: {} }

  onChange = (e) => {
    this.setState({
      car: {
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

  input = (title, name, icon, type = 'text') => (
    <this.FieldGroup
      id={name}
      type={type}
      placeholder={title}
      name={name}
      onChange={this.onChange}
      style={{
        backgroundImage: `url(${icon})`,
        backgroundRepeat: 'no-repeat',
        paddingLeft: 32
      }}
    />
  )

  render() {
    const formInstance = (
      <Modal.Body>
        <form className='ModalsLeft'>
          {this.input('Vehicle Type', 'vType', vType)}
          {this.input('Make', 'make', make)}
          {this.input('Model', 'model', model)}
        </form>
        <form className='ModalsRight'>
          {this.input('Year', 'year', year, 'number')}
          {this.input('License Plate', 'license_number', license)}
          {this.input('Mac Address', 'mac_address', mac)}
        </form>
        <Button className='cancel' onClick={this.props.onClose}>Cancel</Button>
        <Button onClick={() => this.props.onAddCar(this.state.car)}>Submit</Button>
      </Modal.Body>
    );

    return (
      <Modal
        className='Modals'
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
