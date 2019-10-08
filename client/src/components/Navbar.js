import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Signup from './Signup'
import api from '../api'
import App from './App'
import UserProfile from './UserProfile'
import Home from './Home'

class Navbar extends Component {

  handleLogoutClick(e) {
    api.logout()
  }

  render() {

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/">Pawnder</NavLink>

          <div className="nav-links">
            {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
            {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
            {api.isLoggedIn() && (
              <Link to="/" onClick={e => this.handleLogoutClick(e)}>
                Logout
              </Link>)}
              {api.isLoggedIn() && (
              <Link to="/profile">
                Profile
              </Link>
            )}
          </div>
        </nav>

      </div>
    )
  }
}

export default Navbar
