import React from 'react'
import { NavLink } from 'react-router-dom'

function DefaultPage() {
  return (
    <div className="home-app">
      <NavLink to="/examples">to examples</NavLink>
    </div>
  )
}

export default DefaultPage
