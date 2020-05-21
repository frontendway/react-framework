import React from 'react'
import { connect } from 'react-redux'
import * as actions from './redux/actions'
import { bindActionCreators } from 'redux'

class CounterPage extends React.Component {
  render() {
    return <div className="examples-CounterPage">
      &nbsp;
      { this.props.examples.counter }
      &nbsp;
      <button onClick={this.props.actions.addCounter}>+</button>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    examples: state.examples
  }
}

function mapActionToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  }
}

export default connect(mapStateToProps, mapActionToProps)(CounterPage)
