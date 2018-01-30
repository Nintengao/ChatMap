import React, { Component } from 'react';
import {
   ScrollView,
   View,
   Text
 } from 'react-native';

import ChatRoomDetail from './ChatRoomDetail';

class ChatRoomList extends Component {
  state = { rooms: [
    { question: 'Where is school?', issuer: 'Robert' },
    { question: 'Looking for friend.', issuer: 'James' },
    { question: 'Finding my cat.', issuer: 'Amanda' }
  ] };

  componentWillMount() {
    // fetch room data from firebase and setState of rooms
    // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //   .then(response => this.setState({ rooms: response.data }));
  }

  renderRooms() {
    return this.state.rooms.map(room =>
      <ChatRoomDetail key={room.question} room={room} />
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

export default ChatRoomList;
