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

//====================
// ACCOUNT MANAGEMENT
//====================

const showEditAccount = {
  type: 'SHOW_EDIT_ACCOUNT'
}

const showDeleteAccount = {
  type: 'SHOW_DELETE_ACCOUNT'
}

const getAccount = username => ({
  type: 'GET_ACCOUNT',
  url: ('/company/' + username),
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('JWT'),
  },
})

const editAccount = company => ({
  type: 'EDIT_ACCOUNT',
  url: ('/company/' + company.username),
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + localStorage.getItem('JWT'),
  },
  body: company,
});

const deleteAccount = companyId => ({
  type: 'DELETE_ACCOUNT',
  url: ('/company/' + companyId),
  mewthod: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'authorization': 'Bearer ' + localStorage.getItem('JWT'),
  }
})

export default {
  onClose,
  showSignUp,
  createAccount,
  login,
  logout,
  showEditAccount,
  getAccount,
  editAccount,
  deleteAccount,
  loadUserFromToken,
  onShowLogin,
};
