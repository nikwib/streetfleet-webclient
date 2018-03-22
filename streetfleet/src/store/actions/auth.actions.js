//========================
// ACCOUNT / Authorization
//========================
const showSignUp = {
  type: 'SHOW_SIGN_UP',
};

const cancelSignUp = {
  type: 'CANCEL_SIGN_UP',
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

export default {
  showSignUp,
  cancelSignUp,
  createAccount,
};
