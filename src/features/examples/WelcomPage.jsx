import React from 'react'
import { connect } from 'react-redux'

class WelcomePage extends React.Component {
  render() {
    return <div className="examples-welcome-page">
      <h2>WelcomePage</h2>
    </div>
  }
}

export default connect(null, null)(WelcomePage)
