// Import some Code we need
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

// Create a react component
var Weekdays = React.createClass({
    render: function() {
        return <View style={styles.container}>
            <Text>
                Hello World!
            </Text>
        </View>
    }
});

// Style
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

// Show the react component on the screen => entry point of the app
AppRegistry.registerComponent('weekdays', function() {
    return Weekdays
});