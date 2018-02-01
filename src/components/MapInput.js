import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const MapInput = ({ value, onChangeText, placeholder }) => {
  const { inputStyle, labelStyle, containerStyle } = styles

  return (
    <View style={containerStyle}>
      <TextInput
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    width: 300,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  containerStyle: {
    height: 50,
    // flexDirection: 'row',
    // alignItems: 'center',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10
  }
})


export { MapInput }
