const defaultState = {
  cars: [],
  trips: [],
  fetching: false,
  showAddVehicle: false,
  showAddVehicleSuccess: false,
  showAddVehicleFailure: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_CARS_SUCCESS':
      return {
        ...state,
        cars: action.response,
        fetching: false,
      }
    case 'DELETE_CAR_SUCCESS':
      return {
        ...state,
        cars: state.cars.filter(car => car._id !== action.car._id),
        fetching: false,
      }
    case 'GET_CAR_SUCCESS':
      return {
        ...state,
        cars: action.response,
        fetching: false,
        showAddVehicleFailure: true,
      }
    case 'ON_SHOW_ADD_VEHICLE':
      return {
        ...state,
        showAddVehicle: true,
      }
    case 'ON_CANCEL':
      return {
        ...state,
        showAddVehicle: false,
        showAddVehicleFailure: false,
        showAddVehicleSuccess: false,
      }
    case 'GET_TRIPS_SUCCESS':
      return {
        ...state,
        trips: action.response,
        fetching: false,
      }
    case 'GET_CARS_REQUEST':
    case 'GET_CAR_REQUEST':
    case 'ADD_CAR_REQUEST':
    case 'EDIT_CAR_REQUEST':
    case 'DELETE_CAR_REQUEST':
    case 'GET_TRIPS_REQUEST':
      return {
        ...state,
        fetching: true,
      }
    case 'GET_CARS_FAILURE':
    case 'GET_CAR_FAILURE':
    case 'ADD_CAR_SUCCESS':
    case 'ADD_CAR_FAILURE':
    case 'EDIT_CAR_SUCCESS':
    case 'EDIT_CAR_FAILURE':
    case 'DELETE_CAR_FAILURE':
    case 'GET_TRIPS_FAILURE':
      return {
        ...state,
        fetching: false,
      }
    default:
  }
  return state;
};
