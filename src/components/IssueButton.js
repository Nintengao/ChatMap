import React from 'react';
import { View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const IssueButton = ({ onPress }) => {
  return (
    <ActionButton buttonColor="#1abc9c" onPress={onPress} />
  );
};

const styles = {
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
};

export { IssueButton };
