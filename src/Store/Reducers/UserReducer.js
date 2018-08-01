import Reactotron from 'reactotron-react-native';

const initialState = {
  username: '',
  password: '',
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      Reactotron.log(state);

      return action.payload;
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default UserReducer;
