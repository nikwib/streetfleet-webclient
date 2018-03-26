import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Actions from './../store/actions/cars.actions';
import { connect } from 'react-redux';
class EditCar extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      car: this.props.car
    }
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
          onChange={this.onChange}
          value={this.state.car.vType}
          placeholder="E.g. Car, truck, van..."
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Make"
          name="make"
          value={this.state.car.make}
          onChange={this.onChange}
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Model"
          name="model"
          value={this.state.car.model}
          onChange={this.onChange}
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Year"
          name="year"
          value={this.state.car.year}
          onChange={this.onChange}
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="License Plate"
          name="license_number"
          value={this.state.car.license_number}
          onChange={this.onChange}
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Mac Address"
          name="mac_address"
          value={this.state.car.mac_address}
          onChange={this.onChange}
        />
      </form>
    );

    return (
      <Modal
        bsSize="small"
        show={this.props.showEdit}
        onHide={this.props.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formInstance}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Cancel</Button>
          <Button type="submit" onClick={() => this.props.onEditCar(this.state.car)}>Submit</Button>
          {console.log("Edit:", this.state.car)}
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onEditCar: (car) => { dispatch(Actions.editCar(car)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCar);
