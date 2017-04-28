import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import config from './config/firebase';
import LoginForm from './components/LoginForm'


/**
 * This app showcases:
 *
 *  configuration and authentication with firebase
 *
 *  handling of text input with component level state => controlled components
 *
 *  conditional rendering
 *
 *  user feedback (error message, spinner)
 */
export default class App extends Component {
    state = { loggedIn: null };

    componentWillMount(){
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((user) => {
            // called when user signed in or out
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm/>;
            case null:
                return <Spinner size="large"/>
        }
    }

    render() {
        return (
          <View>
              <Header headerText="Auth!" />
              {this.renderContent()}
          </View>
        );
    }
}