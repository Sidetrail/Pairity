/* @flow */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../Components/Header';

type State = {
  devices: Array<Object>,
};

export default class Devices extends React.Component<null, State> {
  state = {
    devices: [
      {
        id: 1,
        name: 'phone',
        icon: 'test',
        activePairds: 3,
        status: 'Online',
      },
      {
        id: 2,
        name: 'laptop',
        icon: 'test',
        activePairds: 3,
        status: 'Online',
      },
      {
        id: 3,
        name: 'desktop',
        icon: 'test',
        activePairds: 3,
        status: 'Online',
      },
    ],
  };

  render() {
    const { devices } = this.state;
    const devicesList = devices.map(device => (
      <Text key={device.id}>{device.name}</Text>
    ));

    return (
      <View style={styles.container}>
        <Header />
        {devicesList}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
