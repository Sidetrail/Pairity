/* @flow */
import React from 'react';
import { withNavigation, NavigationActions } from 'react-navigation';
import { Header } from 'react-native-elements';
import { colors } from '../Config/styles';

type Props = {
  navigation: any,
};

const Headers = (props: Props) => {
  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  };
  const navigateToHome = () => {
    const navigate = NavigationActions.navigate({
      routeName: 'PairedFolders',
    });
    props.navigation.dispatch(navigate);
  };
  return (
    <Header
      backgroundColor={colors.blue}
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        onPress: () => toggleDrawer(),
      }}
      centerComponent={{
        text: 'Pairity',
        style: { color: '#fff', fontSize: 20 },
      }}
      rightComponent={{
        icon: 'home',
        color: '#fff',
        onPress: () => navigateToHome(),
      }}
    />
  );
};

export default withNavigation(Headers);

// const styles = StyleSheet.create({
//   container: {
//     flex: 0.07,
//     margin: 10,
//     flexDirection: 'row',
//     padding: 5,
//     justifyContent: 'center',
//   },
// });
