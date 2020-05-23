import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  EXAMPLES_ADD_COUNTER,
} from './constants'

export function addCounter() {
  return {
    type: EXAMPLES_ADD_COUNTER
  }
}

export function useAddCounter() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.examples.counter)
  const bindAction = useCallback(() => dispatch(addCounter()), [dispatch])

  return { counter, addCounter: bindAction }
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
