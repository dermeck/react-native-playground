// code for IOS

// Import a library to help create a component
import React from 'react';
import {AppRegistry, View, Button} from 'react-native';
import {Header} from './src/components/Header';
import {AlbumList} from './src/components/AlbumList';

/**
 * This app illustrate some react-native basics
 *
 * composition with components
 *
 * class based components with component level state and lifecycle methods
 *
 * functional components (mostly for presentation)
 *
 * usage of props to pass data from a parent to a child component
 *
 * usage of state to record and react to user input
 *
 * styling of components with flexbox
 * 
 */

// Create a component
const App = () => {
    return (
        <View style={{flex: 1}}>
            <Header headerText={'Albums'}/>
            <AlbumList />
        </View>
    );
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);