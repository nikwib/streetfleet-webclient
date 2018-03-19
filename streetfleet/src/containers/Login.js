import React, {Component} from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class Login extends Component {

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
      </FormGroup>
    );
  }

  render() {
    const formInstance = (
      <form>
        <this.FieldGroup
          id="formControlsText"
          type="text"
          placeholder="User Name"
        />
        <this.FieldGroup id="formControlsPassword" placeholder="Password" type="password" />
      </form>
    );
    return (
      <Modal
        className="Login"
        bsSize="small"
        show={this.props.showLogin}
      >
        <Modal.Body>
          {formInstance}
        </Modal.Body>
        <Button bsSize="small" onClick={this.props.handleClose}>Cancel</Button>
        <Button bsSize="small" type="submit" onClick={this.props.handleClose}>Submit</Button>
      </Modal>
    );
  }
}

export default Login;
