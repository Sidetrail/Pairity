/* @flow */
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

type Props = {|
  func: string => void,
  label: string,
|};

const InputWithLabel = ({ func, label }: Props) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(text: string) => func(text)}
      />
    </View>
  </View>
);

export default InputWithLabel;

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  label: {
    textAlign: 'center',
    fontSize: 30,
    padding: 5,
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    borderBottomColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    width: '70%',
  },
});
