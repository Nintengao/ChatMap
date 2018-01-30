import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const SearchButton = ({ onPress, style, children }) => {
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.ButtonStyle, style]}
      >
        <View>
          <Image
            style={styles.imageStyle}
            source={require('../assets/images/search.png')}
          />
        </View>
        <View style={styles.contentStyle}>
          { children }
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  containerStyle: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  ButtonStyle: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  imageStyle: {
    width: 20,
    height: 20,
  },
  contentStyle: {
    paddingLeft: 10
  }
};

export { SearchButton };
