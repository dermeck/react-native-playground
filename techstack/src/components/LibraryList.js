import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render () {
        return null;
    }
}

// take global state object (application state)
// provide part of it as props to the component
const mapStateToProps = state => {
    console.log(state);
    return {};
};

// call connect => returns function => this returned function is called with LibraryList as parameter
export default connect(mapStateToProps)(LibraryList);