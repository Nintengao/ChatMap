import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';

class SettingScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            paddingHorizontal: 40,
            backgroundColor: 'blue'
          }}
          onPress={() => this.props.logoutUser()}
        >
          <Text style={{ fontSize: 23, fontWeight: '600', color: 'white' }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.authReducer.error,
    loading: state.authReducer.loading
  };
};

export default connect(mapStateToProps, { logoutUser })(SettingScreen);
