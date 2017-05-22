import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { data, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text  style={{ flex: 1 }}>
                        { data.description }
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { expanded } = this.props;
        const {titleStyle} = styles;
        const {id, title} = this.props.data;

        return (
            <TouchableWithoutFeedback onPress={
                () => {
                    if (expanded) {
                        this.props.selectLibrary(null)
                    } else {
                        this.props.selectLibrary(id)
                    }
                }
            }>
                <View>
                    <CardSection>
                        <Text style={ titleStyle }>
                            {title}
                        </Text>
                    </CardSection>
                    { this.renderDescription() }
                </View>
            </TouchableWithoutFeedback>
        );
    };
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.data.id;

    return { expanded: expanded }
};

export default connect(mapStateToProps, actions)(ListItem)