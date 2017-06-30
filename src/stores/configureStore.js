/**
 * Created by joshua on 17年6月28日.
 */
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from './reducers/reducers'
import {routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const loggerMiddleware = createLogger()
export const history = createHistory()
const middleware = routerMiddleware(history)


export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
            middleware
        )
    )
}