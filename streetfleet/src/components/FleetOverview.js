import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CarItem } from './CarItem';
import { getAllCars } from './../store/actions';

class FleetOverview extends Component {

  componentWillMount() {
    this.props.getCars();
  }

  renderCars = (props) => props.cars.map(car => {
    return (
      <CarItem
        key={car._id}
        car={car}
      />);
  });

  render() {
    return (
      <div>
        <h1>Fleet Overview</h1>
        {this.renderCars(this.props)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cars: state.cars,
});

const mapDispatchToProps = (dispatch) => ({
  getCars: () => { dispatch(getAllCars) },
});

export default connect(mapStateToProps, mapDispatchToProps)(FleetOverview);

