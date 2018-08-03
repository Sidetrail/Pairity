import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Login from '../Screens/Login';
import DrawerContent from './DrawerContent';
import PairedFolders from '../Screens/PairedFolders';
import Devices from '../Screens/Devices';
import Settings from '../Screens/Settings';
import AddNewFolder from '../Screens/AddNewFolder';

const PrimaryNav = createStackNavigator(
  {
    Login: { screen: Login },
    // Drawer: { screen: Drawer },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);

export default PrimaryNav;

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
