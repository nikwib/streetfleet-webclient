const onClose = {
  type: 'ON_CLOSE',
};

//========================
// ACCOUNT / Authorization
//========================
const showSignUp = {
  type: 'SHOW_SIGN_UP',
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

//====================
// LOGIN
//====================

const onShowLogin = {
  type: 'ON_SHOW_LOGIN',
}


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
  onClose,
  showSignUp,
  createAccount,
  login,
  logout,
  loadUserFromToken,
  onShowLogin,
};
