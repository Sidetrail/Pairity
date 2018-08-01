/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
import Reactotron from 'reactotron-react-native';
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

  handleInputChange = (field: string) => (text: string) => {
    this.setState({
      [field]: text,
    });
    Reactotron.log(this.state);
  };

  render() {
    const { username, password } = this.state;
    const { onLoginPress } = this.props; 
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
              onPress={() => onLoginPress(username, password)}
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

const LoginWithNav = withNavigation(Login);

export default connect(
  null,
  mapDispatchToProps,
)(LoginWithNav);

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
