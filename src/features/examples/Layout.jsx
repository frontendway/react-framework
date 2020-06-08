import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import {
  SidePanel,
  CounterPage,
  WelcomePage
} from './index'

function Layout() {
  return (
    <div className="examples-layout">
      <section>
        <SidePanel />
      </section>
      <section>
        <Switch>
          <Route path="/examples" exact component={CounterPage}></Route>
          <Route path="/examples/welcome" component={WelcomePage}></Route>
          <Redirect path="*" to="/examples"></Redirect>
        </Switch>
      </section>
    </div>
  )
}

export default Layout
