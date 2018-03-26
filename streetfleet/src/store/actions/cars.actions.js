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

const getCar = (car_id) => ({
  type: 'GET_CAR',
  url: ('/vehicle/' + car_id),
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('JWT'),
  },
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

const editCar = (car) => ({
  type: 'EDIT_CAR',
  url: ('/vehicle/' + car._id),
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + localStorage.getItem('JWT'),
  },
  body: car,
  car: car,
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

const onShowAddVehicle = {
  type: 'ON_SHOW_ADD_VEHICLE',
}

const onCancel = {
  type: 'ON_CANCEL',
}

//=======================
// TRIPS
//=======================

const getTrips = (trip) => ({
  type: 'GET_TRIPS',
  url: ('/trips/' + trip.vehicle_id),
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('JWT'),
  },
});

export default {
  getCars,
  getCar,
  addCar,
  editCar,
  deleteCar,
  getTrips,
  onShowAddVehicle,
  onCancel
};
