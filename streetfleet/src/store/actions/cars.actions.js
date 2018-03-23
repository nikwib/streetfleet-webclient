//=======================
// CAR
//=======================

const getCars = {
  type: 'GET_CARS',
  url: ('/fleet'),
};

const getCar = (car) => ({
  type: 'GET_CAR',
  url: ('/vehicle/' + car.vehicle_id),
});

const deleteCar = (car) => ({
  type: 'DELETE_CAR',
  url: ('/vehicle/' + car.vehicle_id),
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer n4hu234gJSON_tokeh3u%T£$%£gyu',
  },
  car: car,
});

const addCar = (car) => ({
  type: 'ADD_CAR',
  url: ('/vehicle' + car.vehicle_id),
  method: 'PUT',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer n4hu234gJSON_tokeh3u%T£$%£gyu',
  },
  body: car,
});

//=======================
// TRIPS
//=======================

const getTrips = (trip) => ({
  type: 'GET_TRIPS',
  url: ('/vehicle/trips/' + trip.vehicle_id),
});

export default {
  getCars,
  getCar,
  deleteCar,
  addCar,
  getTrips,
};
