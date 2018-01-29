import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';

export default class ProfilePicture extends Component<{}> {
  render() {
    return (

            <View style={styles.header}>
                <View style={styles.profilepicWrap}>
                    <Image style={styles.profilepic} source={require('../img/Elon_Musk_2015.jpg')} />
                </View>

            </View>

    );
  }
}

const styles = StyleSheet.create({
    profilepicWrap: {
        width: 180,
        height: 180,
        borderRadius: 100,
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 16,

    },
    profilepic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 4
    }

});
