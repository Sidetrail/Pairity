import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PairedFolderCard from '../Components/PairedFolderCard';

export default class PairedFolders extends React.Component {
  state = {
    folders: [1, 2],
  };

  render() {
    const { folders } = this.state;

    const pairedFolders = folders.map(folder => (
      <PairedFolderCard key={folder} />
    ));

    return (
      <View>
        <Text>hi</Text>
        {pairedFolders}
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
