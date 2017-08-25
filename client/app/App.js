import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'
import About from './About'

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
            </div>
        );
    }
}

export default App;