const defaultState = {
  cars: [],
}
const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_CARS_SUCCESS':
      return {
        cars: action.cars
      }
      case 'GET_CARS_REQUEST':
        console.log('REQUEST');
        break;
    default:
  }
  return state;
};

export default reducers;