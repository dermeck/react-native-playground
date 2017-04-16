import React from 'react';
import { View, Text } from 'react-native';

export default AlbumDetail = (props) => {
    return (
      <View>
          <Text>{props.album.title}
          </Text>
      </View>
    );
};