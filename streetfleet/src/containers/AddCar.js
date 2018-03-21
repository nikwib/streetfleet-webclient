import React, {Component} from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class AddCar extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      value: ''
    };
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
          placeholder="E.g. Car, truck, van..."
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Make"
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Model"
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Year"
        />
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Lisence Plate"
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
          <Button type="submit" onClick={this.props.handleSuccess}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddCar;
