//=======================
// CAR
//=======================

const getCars = {
  type: 'GET_CARS',
  url: ('/fleet'),
  headers: {
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + localStorage.getItem('JWT')
  }
};

const getCar = (car) => ({
  type: 'GET_CAR',
  url: ('/vehicle/' + car),
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('JWT'),
  },

});

const deleteCar = (car) => ({
  type: 'DELETE_CAR',
  url: ('/vehicle/' + car._id),
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('JWT'),
  },
  car: car,
});

const addCar = (car) => ({
  type: 'ADD_CAR',
  url: ('/vehicle'),
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + localStorage.getItem('JWT'),
  },
  body: car,
  car: car,
});

//=======================
// TRIPS
//=======================

const getTrips = (trip) => ({
  type: 'GET_TRIPS',
  url: ('/vehicle/trips/' + trip.vehicle_id),
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('JWT'),
  },
});

export default {
  getCars,
  getCar,
  deleteCar,
  addCar,
  getTrips,
};
