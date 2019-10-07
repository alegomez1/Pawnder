import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'

import api from '../api'
import Navbar from './Navbar'

// Components


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
