import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import api from '../api'
import Navbar from './Navbar'
import Home from './Home'
import Signup from './Signup'
import UserProfile from './UserProfile'
import AddPet from './AddPet'
import UniqueUser from './UniqueUser'
import Login from './Login'

// Components
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleLogoutClick(e) {
    api.logout()
  }

  toggleHasPet = () => {
    this.setState({
      hasPet: !this.state.hasPet,
    })
  }
  render() {
    return (
      <div>
        <Navbar />
        {/* All routes */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route
            path="/profile"
            component={props => (
              <UserProfile {...props} hasPet={this.state.hasPet} />
            )}
          />
          <Route
            path="/addPet"
            component={props => (
              <AddPet {...props} toggleHasPet={this.toggleHasPet} />
            )}
          ></Route>
          <Route
            path="/user/:id"
            component={props => (
              <UniqueUser {...props} />
            )}
          />
        </Switch>
      </div>
      //Test
    )
  }
}
