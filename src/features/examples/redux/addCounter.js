import {
  EXAMPLES_ADD_COUNTER,
} from './constants'

export function addCounter() {
  return {
    type: EXAMPLES_ADD_COUNTER
  }
}

export function reducer(state, action) {
  switch (action.type) {
    case EXAMPLES_ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      }

    default:
      return state
  }
}
