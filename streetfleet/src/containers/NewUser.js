import React, { Component } from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class NewUser extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      value: ''
    };
  }

  FieldGroup = ({ id, label, help, ...props }) => {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

  render() {
    const formInstance = (
      <form>
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="User Name"
          placeholder="Enter text"
        />
        <this.FieldGroup
          id="formControlsEmail"
          type="email"
          label="Email address"
          placeholder="Enter email"
        />
        <this.FieldGroup id="formControlsPassword" label="Password" type="password" />
      </form>
    );
    return (
      <Modal
        bsSize="small"
        show={this.props.showModal}
        // onHide={this.props.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New Account</Modal.Title>
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

export default NewUser;
