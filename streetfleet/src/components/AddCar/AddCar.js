import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class AddCar extends Component {

  constructor(props, context) {
    super(props, context);
    this.car = {
      vType: '',
      make: '',
      model: '',
      year: '',
      license_number: '',
      mac_address: '',
    };
  }

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
      <form>
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Vehicle Type"
          name="vType"
          onChange={this.onChange}
          placeholder="E.g. Car, truck, van..."
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Make"
          name="make"
          onChange={this.onChange}
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Model"
          name="model"
          onChange={this.onChange}
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Year"
          name="year"
          onChange={this.onChange}
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="License Plate"
          name="license_number"
          onChange={this.onChange}
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Mac Address"
          name="mac_address"
          onChange={this.onChange}
        />
      </form>
    );

    return (
      <Modal
        bsSize="small"
        show={this.props.showModal}
        onHide={this.props.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formInstance}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose}>Cancel</Button>
          <Button type="submit" onClick={() => this.props.onAddCar(this.car)}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddCar;
