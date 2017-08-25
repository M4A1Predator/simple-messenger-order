import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom'
import reducers from './app/reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './app/App'

export default function render(req, res){
    // Get initial state
    if(req.session.state === undefined){
        req.session.state = {}
    }
    const initialState = req.session.state

    // Create store
    const store = createStore(reducers, initialState)

    // Render HTML
    const html = ReactDOM.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.originalUrl} context={{}}>
                <App />
            </StaticRouter>
        </Provider>
    )

    // Set preloaded state to client
    const preloadedState = store.getState()
    res.render('index', {
        body: html,
        preloadedState : JSON.stringify(preloadedState).replace(/</g, '\\u003c')
    })
}
