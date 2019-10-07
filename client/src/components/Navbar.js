import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Signup from './Signup'

class Navbar extends Component {
  render () {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="#" className="Navbar-brand">Pawnder</a>
          <div className="nav-links">
            <NavLink to="/signup">
            <a href="#" className="nav-items">Sign Up</a>
            </NavLink>

            <a href="#" className="nav-items">Login</a>
            <a href="#" className="nav-items">Help</a>
          </div>
        </nav>

        <Switch>
          <Route path='/signup' component={Signup} />
        </Switch>
      </div>
    )
  }
}

export default Navbar