import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, Switch } from 'react-router-dom'
import SidePanel from './SidePanel'
import CounterPage from './CounterPage'
import WelcomePage from './WelcomPage'

class Layout extends React.Component {
  render() {
    return <div className="examples-layout">
      <section>
        <SidePanel />
      </section>
      <section>
        <Switch>
          <Route path="/examples/counter" component={CounterPage}></Route>
          <Route path="/examples/welcome" component={WelcomePage}></Route>
          <Redirect to="/examples/counter"></Redirect>
        </Switch>
      </section>
    </div>
  }
}

export default connect(null, null)(Layout)
