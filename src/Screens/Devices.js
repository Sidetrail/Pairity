/* @flow */
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '../Components/Header';
import DeviceCard from '../Components/DeviceCard';

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
        activePairs: 3,
        status: 'Online',
      },
      {
        id: 2,
        name: 'laptop',
        icon: 'test',
        activePairs: 3,
        status: 'Online',
      },
      {
        id: 3,
        name: 'desktop',
        icon: 'test',
        activePairs: 3,
        status: 'Online',
      },
      {
        id: 4,
        name: 'desktop',
        icon: 'test',
        activePairs: 3,
        status: 'Online',
      },
      {
        id: 5,
        name: 'desktop',
        icon: 'test',
        activePairs: 3,
        status: 'Online',
      },
    ],
  };

  render() {
    const { devices } = this.state;
    const devicesList = devices.map(device => (
      <DeviceCard
        key={device.id}
        name={device.name}
        icon={device.icon}
        activePairs={device.activePairs}
        status={device.status}
      />
    ));

    return (
      <View style={styles.container}>
        <Header />
      <ScrollView>
      {devicesList}

      </ScrollView>
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
