import React, {Component} from 'react';
import {createStore} from 'redux';
import List from './components/List.jsx';
import {Provider} from 'react-redux';
import reducers from './redux/reducers.js';

import './App.css';

class App extends Component {

    constructor() {
        super();
        this.store = createStore(
            reducers,
            {
                items: [{
                    content: "Foo"
                }, {
                    content: "Bar"
                }, {
                    content: "Baz"
                }]
            }
        );
    };

    render() {
        return (
            <Provider store={this.store}>
                <List/>
            </Provider>
        );
    };
}

export default App;
