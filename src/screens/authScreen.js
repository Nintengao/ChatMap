import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Card, CardSection, Input, Button, Spinner } from '../components';
import { connect } from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  loginUser,
  checksession
} from '../actions';

class AuthScreen extends Component {
  static navigationOptions = {
    title: 'Authentication'
  };

  navigate = () => {
    const nav = NavigationActions.navigate({
      routeName: 'reg'
    });
    this.props.navigation.dispatch(nav);
  };

  componentWillMount() {
    this.props.checksession();
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text
            style={{
              fontSize: 20,
              alignSelf: 'center',
              color: 'red'
            }}
          >
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderLoginButton() {
    const { email, password } = this.props;

    if (this.props.loading) {
      return (
        <CardSection>
          <Spinner size="large" />
        </CardSection>
      );
    }
    return (
      <CardSection>
        <Button onPress={() => this.props.loginUser({ email, password })}>
          Login
        </Button>
        <Button onPress={this.navigate}>New User?</Button>
      </CardSection>
    );
  }

  renderSignUpButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return <Button onPress={this.navigate}>New User?</Button>;
  }

  render() {
    const { email, password } = this.props;
    //console.log(this.props.user);
    if (this.props.loading_session) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Spinner size="large" />
        </View>
      );
    } else {
      return (
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={text => this.props.emailChanged(text)}
              value={email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={text => this.props.passwordChanged(text)}
              value={password}
            />
          </CardSection>

          {this.renderError()}

          {this.renderLoginButton()}
        </Card>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    email: state.authReducer.email,
    password: state.authReducer.password,
    error: state.authReducer.error,
    loading: state.authReducer.loading,
    loading_session: state.authReducer.loading_session
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
  checksession
})(AuthScreen);
