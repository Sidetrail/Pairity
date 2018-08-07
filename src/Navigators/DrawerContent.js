/* @flow */
import React from 'react';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, View, Button } from 'react-native';

type Props = {|
  navigation: {
    popToTop: () => void,
    dispatch: Object => Object,
  },
|};

const DrawerContent = (props: Props) => {
  const { navigation } = props;
  const navigateToScreen = (route: string) => () => {
    const navigate: Object = NavigationActions.navigate({
      routeName: route,
    });
    navigation.dispatch(navigate);
  };
  return (
    <View style={styles.container}>
      <Button
        title="Paired Folders"
        onPress={navigateToScreen('PairedFolders')}
      />
      <Button title="Devices" onPress={navigateToScreen('Devices')} />
      <Button title="Settings" onPress={navigateToScreen('Settings')} />
      <Button title="Log Out" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  button: {},
});
