/* @flow */
import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, View, Text, Button } from 'react-native';

type Props = {
  navigation: any,
};

const Header = (props: Props) => {
  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  };
  return (
    <View style={styles.container}>
      <Button title="menu" onPress={toggleDrawer} />
      <Text style={styles.text}>Pairity</Text>
    </View>
  );
};

export default withNavigation(Header);

const styles = StyleSheet.create({
  container: {
    flex: 0.07,
    margin: 10,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
  },
  button: {},
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});
