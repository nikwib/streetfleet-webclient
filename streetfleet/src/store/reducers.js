const defaultState = {
  cars: [],
  fetching: false,
}
const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_CARS_SUCCESS':   
      return {
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
      break;
    default:
  }
  return state;
};

export default reducers;