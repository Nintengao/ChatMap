import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Card, CardSection, Input, Button, Spinner } from '../components';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class AuthScreen extends Component {
  static navigationOptions = {
    title: 'Authentication'
  };

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

  renderButton() {
    const { email, password } = this.props;

    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={() => this.props.loginUser({ email, password })}>
        Login
      </Button>
    );
  }

  render() {
    const { email, password } = this.props;
    //console.log(this.props.user);
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

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.authReducer.email,
    password: state.authReducer.password,
    error: state.authReducer.error,
    loading: state.authReducer.loading,
    user: state.authReducer.user
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(AuthScreen);
