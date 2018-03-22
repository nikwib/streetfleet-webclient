const defaultState = {
  cars: [],
  trips: [],
  fetching: false,
  showSignUp: false,
  signUpFailure: false,
  signUpSuccess: false,
}
const reducers = (state = defaultState, action) => {
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

    case 'DELETE_CAR_SUCCESS':
      return {
        ...state,
        cars: state.cars.filter((car) => car.license_number !== action.car.license_number),
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

    case 'SHOW_SIGN_UP':
      return {
        ...state,
        showSignUp: true,
      }
    case 'CANCEL_SIGN_UP':
      return {
        ...state,
        showSignUp: false,
        signUpSuccess: false,
        signUpFailure: false,
      }
    case 'CREATE_ACCOUNT_SUCCESS':
      return {
        ...state,
        fetching: false,
        signUpSuccess: true,
        signUpFailure: false,
      }
      case 'CREATE_ACCOUNT_REQUEST':
      return {
        ...state,
        fetching: true,
      }
    case 'CREATE_ACCOUNT_FAILURE':
      return {
        ...state,
        fetching: false,
        signUpSuccess: false,
        signUpFailure: true,
      }
      break;
    default:
  }
  return state;
};

export default reducers;
