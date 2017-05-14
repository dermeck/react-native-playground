import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

export class ListItem extends Component {
    render () {
        return (
            <CardSection>
                <Text>{this.props.data.title}</Text>

            </CardSection>
        );
    };
}