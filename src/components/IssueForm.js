import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Picker,
} from 'react-native';
import { CardSection } from './CardSection';
import { MapInput } from './MapInput';
import { Input } from './Input';
import QuestionTypes from '../assets/categories/Questions.json';

const IssueForm = ({ onContentChange, onPickerValueChange, pickerSelectedValue, onSubmitPress }) => {
  return (
    <CardSection style={styles.containerStyle}>
      <CardSection>
        <Text>Topic: </Text>
        <MapInput
          placeholder='Enter your topic'
          onChangeText={onContentChange}
        />
      </CardSection>

      <CardSection>
        <Text>Category: </Text>
        <Picker
          style={{flex: 1}}
          selectedValue={pickerSelectedValue}
          onValueChange={onPickerValueChange}>
          <Picker.Item label="Music" value="Music" />
          <Picker.Item label="Sport" value="Sport" />
          <Picker.Item label="Study" value="Study" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </CardSection>

      <CardSection>
        <TouchableOpacity
          style={{ height: 20, width: 50, backgroundColor: 'rgba(0,255,127,0.3)' }}
          onPress={onSubmitPress}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </CardSection>

    </CardSection>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    padding: 50,
    paddingTop: 100,
    backgroundColor: 'rgba(255,255,255,0.75)',
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  }
};

export { IssueForm };
