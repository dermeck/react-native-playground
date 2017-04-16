import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

export default AlbumDetail = (props) => {
    return (
      <Card>
          <Text>
            {props.album.title}
          </Text>
      </Card>
    );
};