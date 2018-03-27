const defaultState = {
  username: '',
  loggedIn: false,
  fetching: false,
  showSignUp: false,
  showLogin: false,
  message: {
    show: false,
    title: '',
    message: '',
  },

};
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_SIGN_UP':
      return {
        ...state,
        showSignUp: true,
      };
    case 'CREATE_ACCOUNT_SUCCESS':
      return {
        ...state,
        fetching: false,
        message: {
          show: true,
          title: 'Success',
          message: 'Account successfully created, please login to get started.',
        },
      };
    case 'CREATE_ACCOUNT_REQUEST':
      return {
        ...state,
        showSignUp: false,
        fetching: true,
      };
    case 'CREATE_ACCOUNT_FAILURE':
      return {
        ...state,
        fetching: false,
        message: {
          show: true,
          title: 'Ohh no!',
          message: 'Pardon us. Account creation failed, please try again!',
        },
      };
    case 'ON_CLOSE':
      return {
        ...state,
        showSignUp: false,
        showLogin: false,
        message: {
          show: false,
          title: '',
          message: '',
        },
      };


    ///////////////
    // LOGIN
    ///////////////

    case 'ON_SHOW_LOGIN':
      return {
        ...state,
        showLogin: true,
      };

    case 'LOGIN_SUCCESS':
      localStorage.setItem('JWT', action.response.json_token);
      localStorage.setItem('username', action.response.username);
      return {
        ...state,
        username: localStorage.getItem('username'),
        loggedIn: true,
        fetching: false,
      };

    case 'LOGIN_REQUEST':
      return {
        ...state,
        fetching: true,
        showLogin: false,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        fetching: false,
        message: {
          show: true,
          title: 'Login failed',
          message: action.response.errors,
        },
      };

    case 'LOGOUT':
      localStorage.setItem('JWT', '');
      localStorage.setItem('username', '');
      return {
        ...state,
        loggedIn: false,
        username: '',
      };

    case 'LOAD_USER_FROM_TOKEN':
      if (localStorage.getItem('username')) {
        return {
          ...state,
          username: localStorage.getItem('username'),
          loggedIn: true,
        };
      }
      break;
    default:
  }
  return state;
};
