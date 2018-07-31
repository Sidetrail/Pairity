import { createDrawerNavigator } from 'react-navigation';
import DrawerContent from './DrawerContent';
import PairedFolders from '../Screens/PairedFolders';
import Devices from '../Screens/Devices';
import Login from '../Screens/Login';
import Settings from '../Screens/Settings';

export const Drawer = createDrawerNavigator(
  {
    Login: {
      screen: Login,
    },
    PairedFolders: {
      screen: PairedFolders,
    },
    Devices: {
      screen: Devices,
    },
    Settings: {
      screen: Settings,
    },
    Logout: {
      screen: Login,
    },
  },
  {
    contentComponent: DrawerContent,
    drawerWidth: 250,
    drawerPosition: 'left',
  },
);
