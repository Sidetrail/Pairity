/* @flow */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Pairity</Text>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 0.07,
    margin: 20,
  },
  text: {
    fontSize: 30,
  },
});
