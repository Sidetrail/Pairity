/* @flow */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Header from '../Components/Header';
import InputWithLabel from '../Components/InputWithLabel';

type State = {
  username: string,
  password: string,
};

export default class Login extends React.Component<null, State> {
  state = {
    username: 'lol',
    password: 'derp',
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.header}>Pairity</Text>
        <View style={styles.inputContainer}>
          <InputWithLabel label="Username" onPress="test" />
          <InputWithLabel label="Password" onPress="test" />
          <View style={styles.buttonContainer}>
            <Button style={styles.button} title="Submit" onPress={() => null} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 40,
    textAlign: 'center',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    
  },
});
