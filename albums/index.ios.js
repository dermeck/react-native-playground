// code for IOS

// Import a library to help create a component
import React from 'react';
import {AppRegistry, View} from 'react-native';
import {Header} from './src/components/Header';
import {AlbumList} from './src/components/AlbumList';

// Create a component
const App = () => {
    return (
        <View>
            <Header headerText={'Albums'}/>
            <AlbumList />
        </View>
    );
};

//http://rallycoding.herokuapp.com/api/music_albums

// Render it to the device
AppRegistry.registerComponent('albums', () => App);