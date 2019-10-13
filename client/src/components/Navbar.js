import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Signup from './Signup'
import api from '../api'
import App from './App'
import UserProfile from './UserProfile'
import Home from './Home'
import Search from './Search'
import CircleImage from './CircleImage'

class Navbar extends Component {
  render() {
    console.log(this.props.user, this.props.user.username)
    return (
      <div>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              </Link>)}

              <Link to="/search">
                Search
              </Link>
          </div> 
        </nav>*/}

        <nav className="navbar navbar-expand-lg navbar-light  navcolor">
          <NavLink to="/">Pawnder</NavLink>

          {/* <div className="nav-links navcolor"> */}
          {this.props.user.username ? (
            <React.Fragment>
              {/* <div className="navbar-div"> */}
              <Link to="/" onClick={e => this.props.handleLogoutClick(e)}>
                <i className="fas fa-sign-out-alt"></i>
              </Link>

              <Link to="/profile">
                <i class="fas fa-user-circle"></i>
              </Link>

            
              <Link to="/search">
              <i className="fa fa-search"></i>
              </Link>
              {/* <span>
                  <Search/>
                </span> */}
              <span>
                <CircleImage />
              </span>
              {/* </div> */}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <NavLink to="/signup">Signup</NavLink>
              <NavLink to="/login">Login</NavLink>
            </React.Fragment>
          )}

          {/* Seen when user IS logged in */}
          {/* </div> */}
        </nav>
      </div>
    )
  }
}

export default Navbar
