import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Countries from './pages/Countries'
import AddCountry from './pages/AddCountry'
import Secret from './pages/Secret'
import Login from './pages/Login'
import Signup from './Signup'
import api from '../api'

// Components
import Navbar from './Navbar'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
        <div>
          <Navbar />

        <Switch>

        </Switch>
      </div>
    )
  }
}







          /* {     {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && (
            <Link to="/" onClick={e => this.handleLogoutClick(e)}>
              Logout
            </Link>
          )}      }*/