const defaultState = {
  cars: [],
  trips: [],
  fetching: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_CARS_SUCCESS':
      return {
        ...state,
        cars: action.response,
        fetching: false,
      }
    case 'GET_CARS_REQUEST':
      return {
        ...state,
        fetching: true,
      }
    case 'GET_CARS_FAILURE':
      return {
        ...state,
        fetching: false,
      }

    case 'GET_CAR_SUCCESS':
      return {
        ...state,
        cars: action.response,
        fetching: false,
      }
    case 'GET_CAR_REQUEST':
      return {
        ...state,
        fetching: true,
      }
    case 'GET_CAR_FAILURE':
      return {
        ...state,
        fetching: false,
      }

    case 'DELETE_CAR_SUCCESS':
      return {
        ...state,
        cars: state.cars.filter(car => car._id !== action.car._id),
        fetching: false,
      }
    case 'DELETE_CAR_REQUEST':
      return {
        ...state,
        fetching: true,
      }
    case 'DELETE_CAR_FAILURE':
      return {
        ...state,
        fetching: false,
      }

    case 'ADD_CAR_SUCCESS':
      return {
        ...state,
        cars: state.cars.concat(action.response),
        fetching: false,
      }
    case 'ADD_CAR_REQUEST':
      return {
        ...state,
        fetching: true,
      }
    case 'ADD_CAR_FAILURE':
      return {
        ...state,
        fetching: false,
      }


    case 'GET_TRIPS_SUCCESS':
      return {
        ...state,
        trips: action.response,
        fetching: false,
      }
    case 'GET_TRIPS_REQUEST':
      return {
        ...state,
        fetching: true,
      }
    case 'GET_TRIPS_FAILURE':
      return {
        ...state,
        fetching: false,
      }

      break;
    default:
  }
  return state;
};
