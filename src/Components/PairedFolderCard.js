import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../Config/styles';
import { icons } from '../../Assets/Images';
import TextAndIcon from './TextAndIcon';

const PairedFolderCard = ({ folder }) => (
  <View style={styles.container}>
    <View style={styles.textRow}>
      <Text style={styles.text}>{folder.name}</Text>
      <TextAndIcon text="Status: " icon={icons[folder.status]} />>
    </View>
    <View style={styles.textRow}>
      <Text style={styles.text}>Size: {folder.size}</Text>
      <Text style={styles.text}>Devices: {folder.devices}</Text>
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
