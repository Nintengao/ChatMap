import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import {NavigationActions} from 'react-navigation';

class SettingScreen extends Component {

  navigate = () => {
    const nav = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'auth'})
      ]
    });
    this.props.navigation.dispatch(nav);
  }

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
          onPress={this.navigate}
        >
          <Text style={{ fontSize: 23, fontWeight: '600', color: 'white' }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SettingScreen;
