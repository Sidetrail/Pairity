/* @flow */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../Config/styles';

type Props = {|
  name: string,
  icon: string,
  activePairs: number,
  status: string,
|};

const DeviceCard = ({ name, icon, activePairs, status }: Props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.text}>Active Pairs: {activePairs}</Text>
    <Text style={styles.text}>{status}</Text>
  </View>
);

export default DeviceCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    height: '20%',
    margin: 20,
    borderWidth: 2,
    borderColor: colors.gray,
    borderRadius: 20,
    overflow: 'hidden',
  },
  textRow: {
    backgroundColor: colors.gray,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  text: {
    fontSize: 20,
    padding: 4,
  },
});
