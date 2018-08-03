/* @flow */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../Config/styles';
import { icons } from '../../Assets/Images';
import TextAndIcon from './TextAndIcon';

type Props = {|
  name: string,
  status: string,
  size: string,
  devices: number,
|};

const PairedFolderCard = ({ name, status, size, devices }: Props) => (
  <View style={styles.container}>
    <View style={styles.textRow}>
      <Text style={styles.text}>{name}</Text>
      <TextAndIcon text="Status: " icon={icons[status]} />>
    </View>
    <View style={styles.textRow}>
      <Text style={styles.text}>Size: {size}</Text>
      <Text style={styles.text}>Devices: {devices}</Text>
    </View>
  </View>
);

export default PairedFolderCard;

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
