//=======================
// CAR
//=======================

const getCars = {
  type: 'GET_CARS',
  url: ('/fleet'),
};

const deleteCar = (car) => ({
  type: 'DELETE_CAR',
  url: ('/fleet/vehicle/' + car.license_number),
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer n4hu234gJSON_tokeh3u%T£$%£gyu',
  },
  car: car,
});

const addCar = (car) => ({
  type: 'ADD_CAR',
  url: ('/fleet/car/' + car.license_number),
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
  url: ('/vehicle/trips/' + trip.license_number),
});

export default {
  getCars,
  deleteCar,
  addCar,
  getTrips,
};
