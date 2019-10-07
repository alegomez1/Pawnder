import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Signup from './Signup'
import api from '../api'
import App from './App'

class Navbar extends Component {

  handleLogoutClick(e) {
    api.logout()
  }

  render() {

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="Navbar-brand">Pawnder</a>

          <div className="nav-links">
            {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
            {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
            {api.isLoggedIn() && (
              <Link to="/" onClick={e => this.handleLogoutClick(e)}>
                Logout
              </Link>
            )}
          </div>
        </nav>

        <Switch>
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    )
  }
}

export default Navbar
