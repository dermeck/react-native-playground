import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image} = album;

  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={styles.thumbNailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text>
            {title}
          </Text>
          <Text>
            {artist}
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