import {
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import DrawerContent from './DrawerContent';

import PairedFolders from '../Screens/PairedFolders';
import Devices from '../Screens/Devices';

export const Drawer = createDrawerNavigator(
  {
    PairedFolders: {
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
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

export default createBottomTabNavigator({
  Folders: PairedFolders,
  Devices,
});
