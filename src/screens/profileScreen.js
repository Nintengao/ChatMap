import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ProfileScreen extends Component {

  static navigationOptions = ({navigation}) => {
    const { navigate } = navigation;
    return {
      title: 'Profile',
      headerRight: (
        <Button
          title="Setting"
          onPress={()=>navigate('setting')}
        />
      )
    };
  }


  render() {
    return (
      <View>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
      </View>
    );
  }
}

export default ProfileScreen;
