import React, { Component } from 'react'

class Navbar extends Component {
  render () {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="#" className="Navbar-brand">Pawnder</a>
          <div className="nav-links">
            <a href="#" className="nav-items">Sign Up</a>
            <a href="#" className="nav-items">Login</a>
            <a href="#" className="nav-items">Help</a>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar