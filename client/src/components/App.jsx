import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import api from '../api'
import Navbar from './Navbar'
import Home from './Home'
// import Signup from './Signup'
import UserProfile from './UserProfile'
import AddPet from './AddPet'
import UniqueUser from './UniqueUser'
import Login from './Login'
import Search from './Search'
import Axios from 'axios'
import NewSignup from './NewSignup'
import SendEmail from './SendEmail'
import GoogleMaps from './GoogleMaps'

// const url = 'http://localhost:5000'
const url = 'https://pawnderapp.herokuapp.com'

// Components

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
    }
  }
  handleLogoutClick = e => {
    api.logout().then(res => {
      console.log('lougout')
      this.setState({ user: {} })
    })
  }

  componentDidMount() {
    this.getUser()
  }

  getUser = async () => {
    let user = await Axios.get(`${url}/api/getUser`).catch(err =>
      console.error(err)
    )
    // console.log(user)
    this.setState({ user: user.data })
  }

  toggleHasPet = () => {
    this.setState({
      hasPet: !this.state.hasPet,
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <Navbar
          {...this.props}
          handleLogoutClick={this.handleLogoutClick}
          user={this.state.user}
        />
        <Switch>
          <Route
            exact
            path="/"
            component={props => <Home {...props} user={this.state.user} />}
          />
          <Route
            path="/signup"
            component={props => <NewSignup {...props} getUser={this.getUser} />}
          />
          <Route
            path="/login"
            component={props => <Login {...props} getUser={this.getUser} />}
          />
          <Route path="/search" component={Search} />
          <Route
            path="/profile"
            component={props => (
              <UserProfile {...props} hasPet={this.state.hasPet} />
            )}
          />

          <Route
            path="/map"
            component={
              GoogleMaps}
          />
          {/* <Route exact path="/addedPet">
            
          </Route> */}
          <Route
            path="/addPet"
            component={props => (
              <AddPet {...props} toggleHasPet={this.toggleHasPet} />
            )}
          ></Route>
          <Route
            path="/user/:id"
            component={props => <UniqueUser {...props} />}
          />
          <Route
            path="/sendEmail"
            component={props => <SendEmail {...props} />}
          />
        </Switch>
      </div>
    )
  }
}
