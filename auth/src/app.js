import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection } from './components/common';
import config from './config/firebase';
import LoginForm from './components/LoginForm'

export default class App extends Component {
    state = { loggedIn: false };

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
        console.log(this.state);
        if (this.state.loggedIn) {
            return (
                <CardSection>
                    <Button>
                        Log Out
                    </Button>
                </CardSection>
            );
        }

        return <LoginForm/>;
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