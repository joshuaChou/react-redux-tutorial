import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import {Route,} from 'react-router'
import { history } from './configureStore'
import AsyncApp from './AsyncApp'
import { ConnectedRouter} from 'react-router-redux'
import App from './App'

const store = configureStore()

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path="/" component={AsyncApp}/>
                        <Route path="/about" component={App}/>
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}