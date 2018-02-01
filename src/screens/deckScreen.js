import React, { Component } from 'react';
import {
   ScrollView,
   View,
   Text
 } from 'react-native';
import { connect } from 'react-redux';

import { DeckDetail } from '../components';

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Nearby Topics'
  };

  componentWillMount() {
    // fetch room data from firebase and setState of rooms
    // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //   .then(response => this.setState({ rooms: response.data }));
  }

  constructor() {
    super();
    this.state = { rooms: [
      { question: 'Where is school?', issuer: 'Robert' },
      { question: 'Looking for friend.', issuer: 'James' },
      { question: 'Finding my cat.', issuer: 'Amanda' }
    ] };
  }
  renderRooms() {
    return this.state.rooms.map(room =>
      <DeckDetail key={room.question} room={room} />
    );
  }
  render() {
    return (
      <View style={{ height: '100%', width: '100%' }}>
        <ScrollView>
          {this.renderRooms()}
        </ScrollView>
      </View>
    );
  }
}

export default connect()(DeckScreen);
