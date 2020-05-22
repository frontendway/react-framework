import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { DefaultPage } from './features/home'
import { Layout } from './features/examples'
import { NotFoundPage } from './features/common'

class Root extends React.Component {
  render() {
    return (
      <Provider store={store.getStore()}>
        <HashRouter>
        <Switch>
            <Route path="/" exact component={DefaultPage}></Route>
            <Route path="/examples" component={Layout}></Route>
            <Route path="*" component={NotFoundPage}></Route>
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}

export default Root
