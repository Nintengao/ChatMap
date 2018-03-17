import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Card, CardSection, Input, Button, Spinner } from '../components';
import { connect } from 'react-redux';
import {
  signupemailChanged,
  signuppasswordChanged,
  signupUser
} from '../actions';

class RegScreen extends Component {
  static navigationOptions = {
    title: 'Sign Up'
  };

  renderError() {
    if (this.props.signuperror) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text
            style={{
              fontSize: 20,
              alignSelf: 'center',
              color: 'red'
            }}
          >
            {this.props.signuperror}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    const { signupemail, signuppassword } = this.props;

    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button
        onPress={() => this.props.signupUser({ signupemail, signuppassword })}
      >
        Sign Up
      </Button>
    );
  }

  render() {
    const { signupemail, signuppassword } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={text => this.props.signupemailChanged(text)}
            value={signupemail}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={text => this.props.signuppasswordChanged(text)}
            value={signuppassword}
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
    signupemail: state.regReducer.signupemail,
    signuppassword: state.regReducer.signuppassword,
    signuperror: state.regReducer.signuperror,
    loading: state.regReducer.loading
  };
};

export default connect(mapStateToProps, {
  signupemailChanged,
  signuppasswordChanged,
  signupUser
})(RegScreen);
