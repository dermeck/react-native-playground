// code for IOS

// Import a library to help create a component
import React from 'react';
import { AppRegistry, Text } from 'react-native';
import { Header } from './src/components/Header';

// Create a component
const App = () => {
  return (
    <Header />
  );
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);