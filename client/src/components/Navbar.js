import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import Signup from './Signup'
// import api from '../api'
// import App from './App'
// import UserProfile from './UserProfile'
// import Home from './Home'
// import Search from './Search'
import logo from './images/Logo (1).png'

class Navbar extends Component {
  render() {
    console.log(this.props.user, this.props.user.username)
    return (
      <div>

        <div className="row boot1">
        <nav className="navbar navbar-expand navbar-light  navcolor">
          
            <div className="col boot2">
              <NavLink to="/">
                <img className="logo" src={logo} alt='logo'/>
              </NavLink>
            </div>

            {this.props.user.username ? (
              <div className="col col-lg boot3">
                <React.Fragment>

                  <Link to="/search">
                    <i className="fa fa-search nav-icons fa-lg"></i>
                  </Link>

                  <Link to="/profile">
                    <i className="fas fa-user-circle nav-icons fa-lg"></i>
                  </Link>

                  <Link to="/" onClick={e => this.props.handleLogoutClick(e)}>
                    <i className="fas fa-sign-out-alt nav-icons fa-lg"></i>
                  </Link>
                </React.Fragment>
              </div>
            ) : (
              <div className="col col-lg boot4">
                <React.Fragment>
                  <Link className="testlink" to="/signup"><span className='signup-login'>Signup</span></Link>
                  <Link to="/login"><span className='signup-login'>Login</span></Link>
                </React.Fragment>
              </div>
            )}
          
        </nav>
        </div>
      </div>
    )
  }
}

export default Navbar
