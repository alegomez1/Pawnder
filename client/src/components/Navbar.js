import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
import Signup from './Signup'
import api from '../api'
import App from './App'
import UserProfile from './UserProfile'
import Home from './Home'
import Search from './Search'
import CircleImage from './CircleImage'
import logo from './images/Logo (1).png'

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

        <div className="row boot1">
        <nav className="navbar navbar-expand navbar-light  navcolor">
          
            <div className="col boot2">
              <NavLink to="/">
                <img className="logo" src={logo} />
              </NavLink>
            </div>

            {/* <div className="nav-links navcolor"> */}
            {this.props.user.username ? (
              <div className="col col-lg boot3">
                <React.Fragment>
                  {/* <div className="navbar-div"> */}
                  <Link to="/" onClick={e => this.props.handleLogoutClick(e)}>
                    <i className="fas fa-sign-out-alt nav-icons"></i>
                  </Link>

                  <Link to="/profile">
                    <i class="fas fa-user-circle nav-icons"></i>
                  </Link>

                  <Link to="/search">
                    <i className="fa fa-search nav-icons"></i>
                  </Link>
                  {/* <span>
                  <Search/>
                </span> */}
                  <span>
                    <CircleImage />
                  </span>
                  {/* </div> */}
                </React.Fragment>
              </div>
            ) : (
              <div className="push">
                <React.Fragment>
                  <NavLink to="/signup">Signup</NavLink>
                  <NavLink to="/login">Login</NavLink>
                </React.Fragment>
              </div>
            )}

            {/* Seen when user IS logged in */}
            {/* </div> */}
          
        </nav>
        </div>
      </div>
    )
  }
}

export default Navbar
