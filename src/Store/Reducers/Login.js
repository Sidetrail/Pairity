const initialState = {
  username: '',
  password: '',
  isLoggedIn: false,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...action.payload, isLoggedIn: true };
    case 'LOGOUT':
      return { ...initialState, isLoggedIn: false };
    default:
      return state;
  }
};

export default LoginReducer;
