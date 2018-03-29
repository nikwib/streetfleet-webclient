import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import CarItem from './CarItem';
import Actions from './../../store/actions/cars.actions';
import '../../css/FleetOverview.css';
import '../../css/Tables.css';

class FleetOverview extends Component {

  componentWillMount = async () => {
    await this.props.getCars();
  }

  deleteCar = (car) => {
    this.props.deleteCar(car);
  }

  renderCars = (props) => {
    if (props.cars.length) {
      return props.cars.map((car) => {
        return (
          <CarItem
            key={car._id}
            car={car}
            onClickDelete={this.deleteCar}
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
                {this.renderCars(this.props)}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(FleetOverview);
