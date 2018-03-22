import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import { CarItem } from './CarItem';
import Actions from './../store/actions';
import '../css/FleetOverview.css';

class FleetOverview extends Component {

  componentWillMount = async () => {
    this.props.getCars();
  }

  deleteCar = (car) => {
    this.props.deleteCar(car);
    // fetch((baseUrl + '/' + topic._id), { method: 'DELETE' })
    // .then(this.fetchTopics)
  }

  renderCars = (props) => props.cars.map((car, i) => {
    i++;
    return (
      <CarItem
        key={car._id}
        car={car}
        onClickDelete={this.deleteCar}
      //onClickEdit={props.onClickEdit(car)}
      />
    );
  });

  render() {
    return (
      <Grid>
        <Row className="show-grid CarLog">
          <Col md={10} mdOffset={1} className="FleetOverview">
            <h2 className="text-success">Fleet Overview</h2>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>License </th>
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
