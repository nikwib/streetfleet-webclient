import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Actions from '../../store/actions/cars.actions';

class CarItem extends Component {

  render() {
    const time = moment.duration(this.props.car.total_driving_time);
    return (
      <tr>
        <td className="text-uppercase">
          <Link to={'/CarLog/' + this.props.car._id} _id={this.props.car._id}>
            {this.props.car.license_number}
          </Link>
        </td>
        <td>
          <Link to={'/CarLog/' + this.props.car._id} _id={this.props.car._id}>
            {this.props.car.make}
          </Link>
        </td>
        <td>
          <Link to={'/CarLog/' + this.props.car._id} _id={this.props.car._id}>
            {this.props.car.model}
          </Link>
        </td>
        <td>
          <Link to={'/CarLog/' + this.props.car._id} _id={this.props.car._id}>
            {moment(time).format('HH:mm')}
          </Link>
        </td>
        <td>
          <Link to={'/CarLog/' + this.props.car._id} _id={this.props.car._id}>
            {this.props.car.total_miles_driven }
          </Link>
        </td>
        <td className="OverviewButtons">
          <Button bsStyle="link" onClick={() => this.props.onShowEditVehicle(this.props.car)}><i className="fas fa-pencil-alt text-success"></i></Button>
          <Button bsStyle="link" onClick={() => this.props.onClickDelete(this.props.car)}><i className="fas fa-trash-alt text-success"></i></Button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onShowEditVehicle: (car) => { dispatch(Actions.onShowEditVehicle(car)) },
});

export default connect(null, mapDispatchToProps)(CarItem);
