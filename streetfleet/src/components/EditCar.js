import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';

import Actions from '../store/actions/cars.actions';
import '../css/Modals.css';
import vType from '../img/icons/type.png';
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

  componentWillReceiveProps(props) {
    if (props.car) this.setState({ car: props.car });
  }

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

  input = (title, name, icon, value, type = 'text') => (
    <this.FieldGroup
      id={name}
      type={type}
      label={title}
      name={name}
      value={value}
      onChange={this.onChange}
      className='text-capitalize' style={{
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
          {this.input('Vehicle Type', 'vType', vType, this.state.car.vType)}
          {this.input('Make', 'make', make, this.state.car.make)}
          {this.input('Model', 'model', model, this.state.car.model)}
        </form>
        <form className='ModalsRight'>
          {this.input('Year', 'year', year, this.state.car.year, 'number')}
          {this.input('License Plate', 'license_number', license, this.state.car.license_number)}
          {this.input('Mac Address', 'mac_address', mac, this.state.car.mac_address)}
        </form>
        <Button className='cancel' onClick={this.props.onClose}>Cancel</Button>
        <Button type='submit' onClick={() => this.props.onEditCar(this.state.car)}>Submit</Button>
      </Modal.Body>
    );

    return (
      <Modal
        className='Modals'
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
