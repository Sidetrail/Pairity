/* @flow */
import React from 'react';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';

const DrawerContent = props => {
  const navigateToScreen = route => () => {
    const navigate = NavigationActions.navigate({
      routeName: route,
    });
    props.navigation.dispatch(navigate);
  };

  return (
    <View style={styles.container}>
      <Text>Menu</Text>
      <Button
        raised
        title="Paired Folders"
        style={styles.button}
        onPress={navigateToScreen('PairedFolders')}
      />
      <Button
        raised
        title="Devices"
        style={styles.button}
        onPress={navigateToScreen('Devices')}
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
