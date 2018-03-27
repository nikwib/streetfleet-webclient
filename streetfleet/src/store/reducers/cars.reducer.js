const defaultState = {
  cars: [],
  trips: [],
  fetching: false,
  showAddVehicle: false,
  car: {},
  showEditVehicle: false,
  editCarSuccess: false,
  message: {
    show: false,
    title: '',
    message: '',
  },
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_CARS_SUCCESS':
      return {
        ...state,
        cars: action.response,
        fetching: false,
      };
    case 'GET_CARS_REQUEST':
      return {
        ...state,
        fetching: true,
      };
    case 'GET_CARS_FAILURE':
      return {
        ...state,
        fetching: false,
      };
    case 'GET_CAR_SUCCESS':
      return {
        ...state,
        cars: action.response,
        fetching: false,

      };
    case 'GET_CAR_REQUEST':
      return {
        ...state,
        fetching: true,
      };
    case 'GET_CAR_FAILURE':
      return {
        ...state,
        cars: [...state.cars, action.response],
        fetching: false,
      };
    case 'EDIT_CAR_REQUEST':
      return {
        ...state,
        fetching: true,
        showEditVehicle: false,
      }
    case 'EDIT_CAR_SUCCESS':
      return {
        ...state,
        fetching: false,
        editCarSuccess: true,
        message: {
          show: true,
          title: 'Success',
          message: 'Vehicle has been updated.',
        },
      }
    case 'EDIT_CAR_FAILURE':
      return {
        ...state,
        fetching: false,
        message: {
          show: true,
          title: 'Alert',
          message: 'Something went wrong, please try again.',
        },
      }
    case 'DELETE_CAR_SUCCESS':
      return {
        ...state,
        cars: state.cars.filter(car => car._id !== action.car._id),
        fetching: false,
      };
    case 'DELETE_CAR_REQUEST':
      return {
        ...state,
        fetching: true,
      };
    case 'DELETE_CAR_FAILURE':
      return {
        ...state,
        fetching: false,
      };
    case 'ADD_CAR_SUCCESS':
      return {
        ...state,
        cars: [...state.cars, action.response],
        fetching: false,
        message: {
          show: true,
          title: 'Success',
          message: 'Vehicle added to you fleet.',
        },
      };
    case 'ADD_CAR_REQUEST':
      return {
        ...state,
        fetching: true,
        showAddVehicle: false,
      };
    case 'ADD_CAR_FAILURE':
      return {
        ...state,
        message: {
          show: true,
          title: 'Alert',
          message: 'Something went wrong, please try again.',
        },
        fetching: false,
      };
    case 'ON_SHOW_ADD_VEHICLE':
      return {
        ...state,
        showAddVehicle: true,
      };
    case 'ON_SHOW_EDIT_VEHICLE':
      return {
        ...state,
        showEditVehicle: true,
        car: action.car
      }
    case 'ON_CLOSE':
      return {
        ...state,
        showAddVehicle: false,
        showEditVehicle: false,
        editCarSuccess: false,
        message: {
          show: false,
          title: '',
          message: '',
        },
      };
    case 'GET_TRIPS_SUCCESS':
      return {
        ...state,
        trips: action.response,
        fetching: false,
      };
    case 'GET_TRIPS_REQUEST':
      return {
        ...state,
        fetching: true,
      };
    case 'GET_TRIPS_FAILURE':
      return {
        ...state,
        fetching: false,
      };
    default:
  }
  return state;
};
