import React from 'react';
import { StyleSheet, View } from 'react-native';
import PairedFolders from './src/Screens/PairedFolders';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PairedFolders />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
  },
});
