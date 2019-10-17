import React, { Component } from 'react'
import api from '../api'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      message: null,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleClick(e) {
    e.preventDefault()
    api
      .login(this.state.username, this.state.password)
      .then(result => {
        console.log('SUCCESS!')
        this.props.getUser()
        this.props.history.push('/') // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="dynamic-signup-div">
        <h2 className="header-text">Login</h2>
        <div className="form-background-login">
          <form>
            {/* Username:{' '} */}
            <input
              className="form-input"
              type="text"
              value={this.state.username}
              name="username"
              placeholder="username"
              onChange={this.handleInputChange}
            />{' '}
            <br />
            {/* Password:{' '} */}
            <input
              className="form-input"
              type="password"
              value={this.state.password}
              placeholder="password"
              name="password"
              onChange={this.handleInputChange}
            />{' '}
            <br />
            <div className="button-div">
              <button
                className="form-button btn btn-md btn-dark"
                onClick={e => this.handleClick(e)}
              >
                Login
              </button>
            </div>
          </form>
          {this.state.message && (
            <div className="info info-danger">{this.state.message}</div>
          )}
        </div>
      </div>
    )
  }
}
