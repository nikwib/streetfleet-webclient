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

const getCar = car_id => ({
  type: 'GET_CAR',
  car_id,
});

const addCar = car => ({
  type: 'ADD_CAR',
  url: ('/vehicle'),
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + localStorage.getItem('JWT'),
  },
  body: car,
});

const editCar = car => ({
  type: 'EDIT_CAR',
  url: ('/vehicle/' + car._id),
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + localStorage.getItem('JWT'),
  },
  body: car,
});

const deleteCar = car => ({
  type: 'DELETE_CAR',
  url: ('/vehicle/' + car._id),
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('JWT'),
  },
  car,
});

const onShowAddVehicle = {
  type: 'ON_SHOW_ADD_VEHICLE',
};

const onShowEditVehicle = car => ({
  type: 'ON_SHOW_EDIT_VEHICLE',
  car,
});

//=======================
// TRIPS
//=======================

const getTrips = mac_address => ({
  type: 'GET_TRIPS',
  url: ('/trips/' + mac_address),
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('JWT'),
  },
});

const saveLastLoc = lastLocation => ({
  type: 'SAVE_LAST_LOCATION',
  lastLocation,
});

// Close message dialogs
const onClose = {
  type: 'ON_CLOSE',
};

// Clear any data in the store
const logout = {
  type: 'LOGOUT',
};

export default {
  getCars,
  getCar,
  addCar,
  editCar,
  deleteCar,
  getTrips,
  onShowAddVehicle,
  onShowEditVehicle,
  onClose,
  logout,
  saveLastLoc,
};
