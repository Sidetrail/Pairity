/* @flow */
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import PairedFolderCard from '../Components/PairedFolderCard';

type State = {
  folders: Array<Object>,
};

export default class PairedFolders extends React.Component<null, State> {
  state = {
    folders: [
      {
        id: 1,
        name: 'music',
        status: 'x',
        size: '1.0gb',
        devices: 2,
      },
      {
        id: 2,
        name: 'games',
        status: 'sync',
        size: '0.5gb',
        devices: 2,
      },
      {
        id: 3,
        name: 'stuff >.>',
        status: 'x',
        size: '1.5gb',
        devices: 2,
      },
      {
        id: 4,
        name: 'music',
        status: 'check',
        size: '1.0gb',
        devices: 2,
      },
      {
        id: 5,
        name: 'games',
        status: 'check',
        size: '0.5gb',
        devices: 2,
      },
    ],
  };

  render() {
    const { folders } = this.state;
    const pairedFolders = folders.map(folder => (
      <PairedFolderCard
        name={folder.name}
        status={folder.status}
        size={folder.size}
        devices={folder.devices}
        key={folder.id}
      />
    ));
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {pairedFolders}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
});
