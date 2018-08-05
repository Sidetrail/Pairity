import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../../Navigators/Navigation';
import Reactotron from 'reactotron-react-native';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = RootNavigator.router.getActionForPathAndParams('Login');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
// const secondAction = RootNavigator.router.getActionForPathAndParams(
//   'PairedFolders',
// );
const initialNavState = RootNavigator.router.getStateForAction(
  firstAction,
  tempNavState,
);

const Navigation = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'LOGIN':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.back(),
        state,
      );
      break;
    case 'LOGOUT':
      // nextState = RootNavigator.router.getStateForAction(
      //   NavigationActions.navigate({ routeName: 'Login' }),
      //   state,
      // );
      Reactotron.log('test');
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default Navigation;
