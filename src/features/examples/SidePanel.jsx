import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class SidePanel extends React.Component {
  render() {
    return <div className="examples-SidePanel">
      <NavLink to="/examples">to counter page</NavLink>
      <br/>
      <NavLink to="/examples/welcome">to welcome page</NavLink>
      <br/>
      <NavLink to="/">back to start</NavLink>
    </div>
  }
}

export default connect(null, null)(SidePanel)
