import React, { Component } from 'react'
import { Provider } from 'react-redux'
import stores from './stores'
import {Route} from 'react-router'
import AsyncApp from './containers/AsyncApp'
import { ConnectedRouter} from 'react-router-redux'
import App from './containers/App'

const store = stores.configure()

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={stores.history}>
                    <div>
                        <Route exact path="/" component={AsyncApp}/>
                        <Route path="/about" component={App}/>
                    </div>
                </ConnectedRouter>
            </Provider>
        )
    }
}