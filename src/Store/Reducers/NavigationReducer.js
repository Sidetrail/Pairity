import Navigation from '../../Navigators/Navigation';

const navReducer = (state = {}, action) => {
  const newState = Navigation.router.getStateForAction(state, action);
  return newState || state;
};

export default navReducer;
