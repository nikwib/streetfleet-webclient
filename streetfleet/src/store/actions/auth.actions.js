//======================
// ACCOUNT AUTHORIZATION
//======================

const onShowLogin = {
  type: 'ON_SHOW_LOGIN',
}

const login = b64encode => ({
  type: 'LOGIN',
  url: '/company/sign-in',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + b64encode,
  },
});

const logout = {
  type: 'LOGOUT',
};

const loadUserFromToken = {
  type: 'LOAD_USER_FROM_TOKEN',
};

//====================
// ACCOUNT MANAGEMENT
//====================

const showSignUp = {
  type: 'SHOW_SIGN_UP',
};

const createAccount = body => ({
  type: 'CREATE_ACCOUNT',
  url: '/company/sign-up',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body,
});

const showEditAccount = {
  type: 'SHOW_EDIT_ACCOUNT'
}

const showDeleteAccount = {
  type: 'SHOW_DELETE_ACCOUNT'
}

const editAccount = company => ({
  type: 'EDIT_ACCOUNT',
  url: ('/company/' + company.username),
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('JWT'),
  },
  body: company,
});

const deleteAccount = username => ({
  type: 'DELETE_ACCOUNT',
  url: ('/company/' + username),
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('JWT'),
  }
})

const onClose = {
  type: 'ON_CLOSE',
};

export default {
  onClose, 
  login,
  logout,
  onShowLogin,
  showSignUp,
  createAccount,
  showEditAccount,
  showDeleteAccount,
  editAccount,
  deleteAccount,
  loadUserFromToken,
};
