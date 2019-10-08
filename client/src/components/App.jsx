import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import api from '../api'
import Navbar from './Navbar'
import Home from './Home'
import Signup from './Signup'
import UserProfile from './UserProfile'
import AddPet from './AddPet'

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
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/addPet" component={AddPet}></Route>
        </Switch>
      </div>
    )
  }
}
