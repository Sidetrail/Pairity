/* @flow */
import Reactotron from 'reactotron-react-native';
import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../../Navigators/Navigation';
import type { Action, NavigationState } from '../Types';
// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = RootNavigator.router.getActionForPathAndParams('Login');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);

const initialNavState = RootNavigator.router.getStateForAction(
  firstAction,
  tempNavState,
);

const Navigation = (
  state: NavigationState = initialNavState,
  action: Action,
) => {
  let nextState;
  switch (action.type) {
    // case 'LOGIN':
    //   // nextState = RootNavigator.router.getStateForAction(
    //   //   NavigationActions.back(),
    //   //   state,
    //   // );
    //   Reactotron.log('login');
    //   break;
    // case 'LOGOUT':
    //   // nextState = RootNavigator.router.getStateForAction(
    //   //   NavigationActions.navigate({ routeName: 'Login' }),
    //   //   state,
    //   // );
    //   Reactotron.log('logout');
    //   break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
};

export default Navigation;
