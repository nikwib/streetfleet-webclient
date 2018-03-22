import config from './../config';

//=======================
// CAR
//=======================

const getCars = {
  type: 'GET_CARS',
  url: (config.baseUrl + '/fleet'),
};

const addCar = (car) => ({
  type: 'ADD_CAR',
  url: (config.baseUrl + '/fleet/car/' + car.license_number),
  method: 'PUT',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer n4hu234gJSON_tokeh3u%T£$%£gyu',
  },
});

const deleteCar = (car) => ({
  type: 'DELETE_CAR',
  url: (config.baseUrl + '/fleet/car/' + car.license_number),
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer n4hu234gJSON_tokeh3u%T£$%£gyu',
  },
  car:car,
});

//=======================
// TRIPS
//=======================

const getTrips = (trip) => ({
  type: 'GET_TRIPS',
  url: (config.baseUrl + '/vehicle/trips/' + trip.license_number),
});

//========================
// ACCOUNT / Authorization
//========================
const showSignUp ={
  type: 'SHOW_SIGN_UP',
};

const cancelSignUp = {
  type: 'CANCEL_SIGN_UP',
};

const createAccount = (body) => ({
  type: 'CREATE_ACCOUNT',
  url: config.baseUrl + '/user/sign-up',
  method: 'POST',
  body,
});


export default {
  getCars,
  deleteCar,
  addCar,
  getTrips,
  showSignUp,
  cancelSignUp,
  createAccount,
};
