import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import CarItem from './CarItem';
import Actions from './../../store/actions/cars.actions';
import '../../css/FleetOverview.css';
import '../../css/Tables.css';

class FleetOverview extends Component {

  componentDidMount = () => {
    this.props.getCars();
  }

  renderCars = () => {
    if (this.props.cars.length) {
      return this.props.cars.map((car) => {
        return (
          <CarItem
            key={car._id}
            car={car}
            onClickDelete={() => this.props.deleteCar(car)}
            onClickEdit={() => this.props.onShowEditVehicle(car)}
          />
        );
      });
    }
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid text-capitalize">
          <Col md={10} mdOffset={1} className="TableBackground">
            <h2>Fleet Overview</h2>
            <Table hover className="OverviewTable">
              <thead>
                <tr>
                  <th>License </th>
                  <th>Make </th>
                  <th>Model </th>
                  <th>Driving time</th>
                  <th>Distance</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {this.renderCars()}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  cars: state.cars.cars,
});

const mapDispatchToProps = (dispatch) => ({
  getCars: () => { dispatch(Actions.getCars); },
  deleteCar: (car) => { dispatch(Actions.deleteCar(car)); },
  onShowEditVehicle: (car) => { dispatch(Actions.onShowEditVehicle(car)); },  
});

export default connect(mapStateToProps, mapDispatchToProps)(FleetOverview);
