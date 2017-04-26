import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
    state = {email: '', password: '', error: ''};

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: ''});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch( () => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                    console.log(email);
                    console.log(firebase);
                        this.setState({ error: 'Authentication failed'});
                    })
            });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeHolder="user@example.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={text => this.setState({email: text })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeHolder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        label="Password"
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login!
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
  errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  }
};

export default LoginForm;