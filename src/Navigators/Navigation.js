/* @flow */
import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
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
  state => state.Navigation,
);
export const Drawer = createDrawerNavigator(
  {
    PairedFolders: {
      screen: PairedFolders,
    },
    Devices: {
      screen: Devices,
    },
    Settings: {
      screen: Settings,
    },
  },
  {
    contentComponent: DrawerContent,
    drawerWidth: 250,
    drawerPosition: 'left',
  },
);
const DrawerNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: 'Pairity',
      headerLeft: <Text onPress={() => navigation.toggleDrawer()}>Menu</Text>,
    }),
  },
);

const RootNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    DrawerNavigator: { screen: DrawerNavigator },
  },
  {
    headerMode: 'none',
  },
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.Navigation,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, reduxMiddleware };
