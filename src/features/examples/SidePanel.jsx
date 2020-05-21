import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SidePanel extends React.Component {
  render() {
    return <div className="examples-SidePanel">
      <Link to="/examples/counter">to counter page</Link>
      <Link to="/examples/welcome">to welcome page</Link>
    </div>
  }
}

export default connect(null, null)(SidePanel)
