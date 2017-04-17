import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={styles.thumbNailStyle}
            source={{ uri: props.album.thumbnail_image }}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text>
            {props.album.title}
          </Text>
          <Text>
            {props.album.artist}
          </Text>
        </View>
      </CardSection>
    </Card>
  )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbNailStyle: {
    height: 50,
    width: 50
  }
}