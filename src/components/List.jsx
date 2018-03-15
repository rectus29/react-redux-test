import React, { Component } from 'react';
import {connect} from 'react-redux';
import Item from './Item.jsx';
import actions from '../redux/actions.js';

class List extends React.Component {
    render() {
        return <ul>
            {this.props.items.map((item) => <Item
                content={item.content}
                deleteItem={this.props.deleteItem.bind(null, item)}
            />)}
        </ul>;
    }
}

module.exports = connect(
    (state = {}) => state,
    (dispatch, props) => Object.assign({}, props, {
        deleteItem: actions.deleteItem.bind(null, dispatch)
    })
)(List);

export default List;
