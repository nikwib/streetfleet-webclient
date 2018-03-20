import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import { CarItem } from './CarItem';
import Actions from './../store/actions';

console.log(Actions.getCars);


class FleetOverview extends Component {

  componentWillMount = async () => {
    this.props.getCars();
  }


  deleteCar = (car) => {
    this.props.deleteCar(car);
    // fetch((baseUrl + '/' + topic._id), { method: 'DELETE' })
    // .then(this.fetchTopics)
  }

  renderCars = (props) => props.cars.map((car, index) => {
    index = index + 1;
    return (
      <CarItem
        key={car._id}
        car={car}
        onClickDelete={this.deleteCar}
      //onClickEdit={props.onClickEdit(car)}
      />);
  });

  render() {
    return (
      <div>
        <h1>Fleet Overview</h1>
        <Table striped={true} bordered={true} condensed={true} hover={true}>
          <thead>
            <tr>
              <th>License </th>
              <th>Model </th>
              <th>Driving time</th>
              <th>Distance</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {this.renderCars(this.props)}
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cars: state.cars,
});

const mapDispatchToProps = (dispatch) => ({
  getCars: () => { dispatch(Actions.getCars) },
  deleteCar: (car) => { dispatch(Actions.deleteCar(car)) }, 
});

export default connect(mapStateToProps, mapDispatchToProps)(FleetOverview);
