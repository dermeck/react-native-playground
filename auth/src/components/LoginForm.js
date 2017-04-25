import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = {email: '', password: ''};

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
                <CardSection>
                    <Button>
                        Login!
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;