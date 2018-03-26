import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import EditCar from '../../containers/EditCar';
import Actions from '../../store/actions/cars.actions';

class CarItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showEdit: false
    };
  }

  handleEdit = () => {
    this.setState({ showEdit: true })
  }

  onEditCar = (car) => {
    this.props.onEditCar(car);
    this.props.getCars();
    this.handleClose();
  }

  handleClose = () => {
    this.setState({ showEdit: false })
  }

  render() {
    return (
      <tr>
        <td className="text-uppercase">
          <Link to={"/CarLog/" + this.props.car._id} _id={this.props.car._id}>
            {this.props.car.license_number}
          </Link>
        </td>
        <td>
          <Link to={"/CarLog/" + this.props.car._id} _id={this.props.car._id}>
            {this.props.car.make}
          </Link>
        </td>
        <td>
          <Link to={"/CarLog/" + this.props.car._id} _id={this.props.car._id}>
            {this.props.car.model}
          </Link>
        </td>
        <td>
          <Link to={"/CarLog/" + this.props.car._id} _id={this.props.car._id}>
            {moment(this.props.car.total_driving_time).format('HH:mm')}
          </Link>
        </td>
        <td>
          <Link to={"/CarLog/" + this.props.car._id} _id={this.props.car._id}>
            {this.props.car.total_miles_driven + " miles"}
          </Link>
        </td>
        <td className="OverviewButtons">
          <Button bsStyle="link" onClick={this.handleEdit}><i className="fas fa-pencil-alt text-success"></i></Button>
          <Button bsStyle="link" onClick={() => this.props.onClickDelete(this.props.car)}><i className="fas fa-trash-alt text-success"></i></Button>
          <EditCar
            showEdit={this.state.showEdit}
            handleClose={this.handleClose}
            onEditCar={this.onEditCar}
            car={this.props.car}
          />
        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getCars: () => { dispatch(Actions.getCars) },
  onEditCar: (car) => { dispatch(Actions.editCar(car)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(CarItem);
