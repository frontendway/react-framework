import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SidePanel extends React.Component {
  render() {
    return <div className="examples-SidePanel">
      <Link to="/examples">to counter page</Link>
      <br/>
      <Link to="/examples/welcome">to welcome page</Link>
      <br/>
      <Link to="/">back to start</Link>
    </div>
  }
}

export default connect(null, null)(SidePanel)
