import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { 
        email: '',
        password: '' 
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        value={this.state.text}
                        onChangeText={email => this.setState({ email })} 
                        placeholder="user@gmail.com"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="password"
                        label="Password"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
