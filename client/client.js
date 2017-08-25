import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './app/reducers'
import { BrowserRouter} from 'react-router-dom'
import App from './app/App';
import axios from 'axios'


// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Get state from server
const store = createStore(reducers, preloadedState)

// Store listener
store.subscribe(() => {
    // Save state
    const state = store.getState()
    const saveData = {
        data : state
    }
    // Save state on session
    axios({
        method: 'put',
        url: '/sess',
        data: saveData
    })
    .then((res) => {
        
    })
    .catch(err => {
        console.log(err)
    })
})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();
