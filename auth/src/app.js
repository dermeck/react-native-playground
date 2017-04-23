import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import config from './config/firebase';

export default class App extends Component {
    componentWillMount(){
        firebase.initializeApp(config);
    }

    render() {
        return (
          <View>
              <Header headerText="Auth!" />
          </View>
        );
    }
}