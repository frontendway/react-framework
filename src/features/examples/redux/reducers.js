import { reducer as addCounterReducer } from './addCounter'
import initState from './initState'

const reducers = [
  addCounterReducer
]

export default function reducer(state = initState, action) {
  let newState = null
  switch(action.type) {
    // Handle cross-topic actions here
    default:
      newState = state
  }
  return reducers.reduce((s, r) => r(s, action), newState)
}
