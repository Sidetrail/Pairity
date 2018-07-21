import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PairedFolderCard from './src/Components/PairedFolderCard';
import PairedFolders from './src/Screens/PairedFolders';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PairedFolders />
        <PairedFolderCard />
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
  },
});
