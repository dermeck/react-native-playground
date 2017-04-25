import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = {email: ''};

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
                <CardSection></CardSection>
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