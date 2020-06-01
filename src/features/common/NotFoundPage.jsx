import React from 'react'
import { connect } from 'react-redux'

class NotFoundPage extends React.Component {
  render() {
    return <div className="common-not-found-page">
      NotFoundPage
    </div>
  }
}

export default connect(null, null)(NotFoundPage)
