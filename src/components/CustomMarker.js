import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import MapView from 'react-native-maps';

const CustomMarker = ({ coordinate }) => {
  return (
    <MapView.Marker
      coordinate={coordinate}
    >
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require('../assets/images/chatbox-red.jpg')}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>
            Music
          </Text>
        </View>
      </View>
    </MapView.Marker>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    width: 40,
    height: 30
  },
  imageView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  image: {
    flex: 1,
    width: 40,
    height: 30
  },
  textView: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    color: 'white'
  }
}

export { CustomMarker };
