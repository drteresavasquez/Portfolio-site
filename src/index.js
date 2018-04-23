import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/main.css';
import Nav from './components/Nav';
import base from './components/base';

class App extends Component {
    render() {
        return(
            <Nav />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('toot'));
