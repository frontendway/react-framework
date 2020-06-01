import React from 'react'
import { useAddCounter } from './redux/hooks'

function CounterPage() {
  const { counter, addCounter } = useAddCounter()

  return (
    <div className="examples-counter-page">
      &nbsp;
      { counter }
      &nbsp;
      <button onClick={addCounter}>+</button>
    </div>
  )
}

export default CounterPage
