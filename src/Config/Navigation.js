import React from 'react';
import {
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import PairedFolders from '../Screens/PairedFolders';
import Devices from '../Screens/Devices';

export const Drawer = createDrawerNavigator(
  {
    Folders: {
      screen: PairedFolders,
    },
    Devices: {
      screen: Devices,
    },
  },
  {
    contentComponent: DrawerContent,
    drawerWidth: 250,
    drawerPosition: 'left',
  },
);;

export default createBottomTabNavigator({
  Folders: PairedFolders,
  Devices,
});
