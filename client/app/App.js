import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'
import OrderDetail from './OrderDetail'

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/orderDetail" component={OrderDetail} />
            </div>
        );
    }
}

export default App;