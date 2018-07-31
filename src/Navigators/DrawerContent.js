/* @flow */
import React from 'react';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, View, Button } from 'react-native';

type Props = {
  navigation: any,
};

const DrawerContent = (props: Props) => {
  const navigateToScreen = route => () => {
    const navigate = NavigationActions.navigate({
      routeName: route,
    });
    props.navigation.dispatch(navigate);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Paired Folders"
        style={styles.button}
        onPress={navigateToScreen('PairedFolders')}
      />
      <Button
        title="Devices"
        style={styles.button}
        onPress={navigateToScreen('Devices')}
      />
      <Button
        title="Settings"
        style={styles.button}
        onPress={navigateToScreen('Settings')}
      />
      <Button
        title="Log Out"
        style={styles.button}
        onPress={navigateToScreen('Logout')}
      />
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 35,
  },
  text: {},
  button: {},
});
