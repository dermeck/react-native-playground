// Import some Code we need
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

// Create a react component
var Weekdays = React.createClass({
    render: function() {
        return <View>
            <Text>
                Hello World!
            </Text>
        </View>
    }
});

// Show the react component on the screen => entry point of the app
AppRegistry.registerComponent('weekdays', function() {
    return Weekdays
});