import config from './../config';

export const getAllCars = {
  type: 'GET_CARS',
  url: (config.baseUrl + '/fleet'),
};

