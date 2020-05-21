import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './rootReducer'
import thunk from 'redux-thunk'

const middlewares = [
  thunk
]

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger')
  const logger = createLogger({ collapsed: true })
  middlewares.push(logger)
}

export default function storeConfigure() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(reducer(), composeEnhancers(
    applyMiddleware(...middlewares)
  ))

  return store
}
