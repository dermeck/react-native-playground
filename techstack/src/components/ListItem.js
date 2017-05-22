import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class ListItem extends Component {
    renderDescription() {
        const { data, selectedLibraryId } = this.props;

        if (data.id === selectedLibraryId) {
            return (
                <Text>
                    { data.description }
                </Text>
            );
        }
    }

    render() {
        const { selectedLibraryId } = this.props;
        const {titleStyle} = styles;
        const {id, title} = this.props.data;

        return (
            <TouchableWithoutFeedback onPress={
                () => {
                    if (id == selectedLibraryId) {
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

const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId}
};

export default connect(mapStateToProps, actions)(ListItem)