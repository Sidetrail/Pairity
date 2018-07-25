import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const TextAndIcon = ({ text, icon }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
    <View>
      <Image style={styles.icon} source={icon} />
    </View>
  </View>
);

export default TextAndIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    flex: 1,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    padding: 3,
  },
});
