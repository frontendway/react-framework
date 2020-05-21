import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class DefaultPage extends React.Component {
  render() {
    return <div className="home-app">
      <Link to="/examples">to examples</Link>
    </div>
  }
}

export default connect(null, null)(DefaultPage)
