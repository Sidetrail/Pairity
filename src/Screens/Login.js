/* @flow */
import React from 'react';
import Reactotron from 'reactotron-react-native';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { loginAction } from '../Store/Actions/Login';
import InputWithLabel from '../Components/InputWithLabel';
import { colors } from '../Config/styles';

type Props = {|
  navigation: {
    dispatch: Object => void,
  },
  submitLogin: (string, string) => void,
|};

type State = {|
  username: string,
  password: string,
|};

class Login extends React.Component<Props, State> {
  state = {
    username: 'lol',
    password: 'derp',
  };

  loginAndGoToHomePage = () => {
    const { username, password } = this.state;
    const { submitLogin, navigation } = this.props;
    submitLogin(username, password);
    const navigate: Object = NavigationActions.navigate({
      routeName: 'PairedFolders',
    });
    navigation.dispatch(navigate);
  };

  handleInputChange = (field: string) => (text: string) => {
    this.setState({
      [field]: text,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Pairity</Text>
        <View style={styles.inputContainer}>
          <InputWithLabel
            label="Username"
            func={this.handleInputChange('username')}
          />
          <InputWithLabel
            label="Password"
            func={this.handleInputChange('password')}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Submit"
              buttonStyle={styles.button}
              containerViewStyle={styles.inputContainer}
              onPress={() => this.loginAndGoToHomePage()}
            />
          </View>
          <View />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  submitLogin: (username: string, password: string) => {
    dispatch(loginAction(username, password));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Login);

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
