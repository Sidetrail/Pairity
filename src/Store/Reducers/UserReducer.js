const initialState = {
  username: '',
  password: '',
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.credentials;
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default UserReducer;
