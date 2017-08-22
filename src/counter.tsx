import * as React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { RootState } from './store'

import * as actions from './actions'

export interface Props {
    counter: number
}
export interface Actions {
    increase(): void
    decrease(): void
}

const Counter = ({ counter, increase, decrease }: Props & Actions) => (
    <div>
        <h2>{counter}</h2>
        <p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </p>
    </div>
)

export default connect<Props, Actions, {}>(
    (state: RootState) => ({ counter: state.counter }),
    { increase: actions.increase, decrease: actions.decrease }
)(Counter)
