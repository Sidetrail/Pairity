/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation, NavigationActions } from 'react-navigation';
import { loginAction } from '../Store/Actions/Login';
import InputWithLabel from '../Components/InputWithLabel';
import { colors } from '../Config/styles';

type Props = {
  navigation: any,
  dispatch: any,
};

type State = {
  username: string,
  password: string,
};

class Login extends React.Component<Props, State> {
  state = {
    username: 'lol',
    password: 'derp',
  };

  navigateToHome = () => {
    const navigate = NavigationActions.navigate({
      routeName: 'PairedFolders',
    });
    this.props.navigation.dispatch(navigate);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Pairity</Text>
        <View style={styles.inputContainer}>
          <InputWithLabel label="Username" onPress="test" />
          <InputWithLabel label="Password" onPress="test" />
          <View style={styles.buttonContainer}>
            <Button
              title="Submit"
              buttonStyle={styles.button}
              containerViewStyle={styles.inputContainer}
              onPress={() => this.props.onLoginPress}
            />
          </View>
          <View />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLoginPress: (username, password) => {
    dispatch(loginAction(username, password));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(withNavigation(Login));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 35,
    fontSize: 45,
    textAlign: 'center',
  },
  inputContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: colors.blue,
  },
});
