import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { RootState } from './store'

import * as actions from './actions'

export interface Props {
    counter: number
}

const Counter = ({ counter, increase, decrease }: Props & typeof actions) => (
    <div>
        <h2>{counter}</h2>
        <p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </p>
    </div>
)

export default connect(
    (state: RootState) => ({ counter: state.counter }),
    { ...actions }
)(Counter)
