import { baseUrl } from './../config';

export const getAllCars = {
  type: 'GET_CARS',
  url: (baseUrl + '/fleet'),
};

