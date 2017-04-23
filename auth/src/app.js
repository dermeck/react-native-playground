import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import config from './config/firebase';
import LoginForm from './components/LoginForm'

export default class App extends Component {
    componentWillMount(){
        firebase.initializeApp(config);
    }

    render() {
        return (
          <View>
              <Header headerText="Auth!" />
              <LoginForm/>
          </View>
        );
    }
}