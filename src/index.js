import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Root from './root'

render(
    <Root />,
    document.getElementById('root')
)

registerServiceWorker();
