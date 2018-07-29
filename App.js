import React from 'react';
import { StyleSheet, View } from 'react-native';
import PairedFolders from './src/Screens/PairedFolders';

const App = () => (
  <View style={styles.container}>
    <PairedFolders />
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
  },
});
