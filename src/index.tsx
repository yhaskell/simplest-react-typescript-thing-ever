import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore, Action } from 'redux'
import { Provider } from 'react-redux'

import store from './store'

import Counter from './counter'


const Application = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
)


ReactDOM.render(
    <Application />,
    document.getElementById('app')
)