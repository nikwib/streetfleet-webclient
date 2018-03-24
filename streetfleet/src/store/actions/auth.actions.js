//========================
// ACCOUNT / Authorization
//========================
const showSignUp = {
  type: 'SHOW_SIGN_UP',
};

const cancelSignUp = {
  type: 'CANCEL_SIGN_UP',
};

const closeSignUpSuccess = {
  type: 'CLOSE_SIGN_UP_SUCCESS',
};

const closeSignUpFailure = {
  type: 'CLOSE_SIGN_UP_FAILURE',
};

const createAccount = (body) => ({
  type: 'CREATE_ACCOUNT',
  url: '/company/sign-up',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body,
});

const login = (b64encode) => ({
  type: 'LOGIN',
  url: '/company/sign-in',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'authorization': 'Basic ' + b64encode,
  },
});

const logout = {
  type: 'LOGOUT',  
}

const loadUserFromToken = {
  type: 'LOAD_USER_FROM_TOKEN',
};

export default {
  showSignUp,
  cancelSignUp,
  createAccount,
  login,
  logout,
  loadUserFromToken,
  closeSignUpSuccess,
  closeSignUpFailure,
};
