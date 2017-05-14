import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { ListItem } from './ListItem';
import { connect } from 'react-redux';

class LibraryList extends Component {
    componentWillMount () {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2

        });

        //this.dataSource = ds.cloneWithRows(this.props.libraries);
        this.dataSource = ds.cloneWithRowsAndSections(this.getLibraryMap());
        console.log(this.props.libraries);

    }

    renderRow(rowData) {
        return <ListItem data={ rowData }/>
    }

    renderSectionHeader(sectionData, category) {
        let food = [
            {name: "Lettuce", category: "Vegetable"},
        {name: "Apple", category: "Fruit"},
        {name: "Orange", category: "Fruit"},
        {name: "Potato", category: "Vegetable"}
    ];
        console.log(food);
        // console.log(sectionData);
        // console.log(category);
        return(

            <View>
                <Text>{category}</Text>
            </View>
        );
    }

    getLibraryMap () {
        let map = {};
        this.props.libraries.forEach((library) => {
                if (!map[library.category]) {
                    map[library.category] = [];
                }
                map[library.category].push(library);
            }
        );

        return map;
    }

    render () {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
                renderSectionHeader={this.renderSectionHeader}
            />
        );

    }
}

// take global state object (application state)
// provide part of it as props to the component
const mapStateToProps = state => {
    return { libraries: state.libraries};
};

// call connect => returns function => this returned function is called with LibraryList as parameter
export default connect(mapStateToProps)(LibraryList);