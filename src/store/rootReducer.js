import { combineReducers } from 'redux'
import examplesReducer from '../features/examples/redux/reducers'

const reducerMap = {
  examples: examplesReducer
}

export default () => {
  // Duplicated reducer key

  return combineReducers(reducerMap)
}
