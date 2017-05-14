import React, { Component } from 'react';
import { ListView } from 'react-native';
import { ListItem } from './ListItem';
import { connect } from 'react-redux';

class LibraryList extends Component {
    componentWillMount () {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow(rowData) {
        return <ListItem data={ rowData }/>
    }

    render () {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );

    }
}

// take global state object (application state)
// provide part of it as props to the component
const mapStateToProps = state => {
    console.log(state);
    return { libraries: state.libraries};
};

// call connect => returns function => this returned function is called with LibraryList as parameter
export default connect(mapStateToProps)(LibraryList);