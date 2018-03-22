
const defaultState = {
  authentication: {},
  fetching: false,
  showSignUp: false,
  signUpFailure: false,
  signUpSuccess: false,
}
export default (state = defaultState, action) => {
  switch (action.type) {
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
