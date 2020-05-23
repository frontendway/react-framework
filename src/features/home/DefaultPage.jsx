import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class DefaultPage extends React.Component {
  render() {
    return <div className="home-app">
      <NavLink to="/examples">to examples</NavLink>
    </div>
  }
}

export default connect(null, null)(DefaultPage)
