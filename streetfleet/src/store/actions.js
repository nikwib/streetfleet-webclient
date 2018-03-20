import config from './../config';

const getCars = {
  type: 'GET_CARS',
  url: (config.baseUrl + '/fleet'),
};

const deleteCar = (car) => ({
  type: 'DELETE_CAR',
  url: (config.baseUrl + '/fleet/car/' + car.license_number),
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer n4hu234gJSON_tokeh3u%T£$%£gyu',
  },
});

export default {
  getCars,
  deleteCar
};
