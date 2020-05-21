import React from 'react'
import { connect } from 'react-redux'

class CounterPage extends React.Component {
  render() {
    return <div className="examples-CounterPage">
      CounterPage
    </div>
  }
}

export default connect(null, null)(CounterPage)
