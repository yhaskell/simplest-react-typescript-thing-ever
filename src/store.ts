import { Action, createStore } from 'redux'

export interface RootState {
    counter: number
    plussed: number
    minussed: number
}

const defaultState: RootState = {
    counter: 0,
    plussed: 0,
    minussed: 0
}

const reducer = (state: RootState = defaultState, action: Action) => {
    switch (action.type) {
        case "INCREASE": return {
            counter: state.counter + 1,
            plussed: state.plussed + 1,
            minussed: state.minussed
        }
        case "DECREASE": return {
            counter: state.counter - 1,
            plussed: state.plussed,
            minussed: state.minussed + 1
        }
        default: return state
    }
}

declare var window: any
const rde = window["__REDUX_DEVTOOLS_EXTENSION__"]

export default createStore(reducer, rde && rde())