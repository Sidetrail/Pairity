/* @flow */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type State = {|
  temp: string,
|};

export default class Settings extends React.Component<null, State> {
  state = {
    temp: 'temp',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.settingsContainer}>
          <Text>setting 1</Text>
          <Text>setting 2</Text>
          <Text>setting 3</Text>
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
