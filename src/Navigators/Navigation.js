import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import Login from '../Screens/Login';
import PairedFolders from '../Screens/PairedFolders';
import DrawerContent from './DrawerContent';
import Devices from '../Screens/Devices';
import Settings from '../Screens/Settings';

const reduxMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const RootNavigator = createStackNavigator({
  Login: { screen: Login },
  PairedFolders: { screen: PairedFolders },
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});
const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, reduxMiddleware };
