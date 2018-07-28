/* @flow */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

type Props = {
  text: string,
  icon: string,
};

const TextAndIcon = (props: Props) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.text}>{props.text}</Text>
    </View>
    <View>
      <Image style={styles.icon} source={props.icon} />
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
