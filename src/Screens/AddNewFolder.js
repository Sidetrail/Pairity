/* @flow */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Components/Header';

type State = {
  temp: string,
};

export default class AddNewFolder extends React.Component<null, State> {
  state = {
    temp: 'temp',
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.settingsContainer}>
          <Text>add pair</Text>
          <Text>add pair</Text>
          <Text>add pair</Text>
          <Text>add pair</Text>
          <Text>add pair</Text>
          <Text>add pair</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
