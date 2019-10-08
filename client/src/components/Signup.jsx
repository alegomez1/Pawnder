import React, { Component } from 'react'
import api from '../api'

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      ownerName: '',
      password: '',
      ownerImage: '',
      ownerBio: '',
      ownerAge: '',
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
    let data = {
      username: this.state.username,
      ownerName: this.state.ownerName,
      password: this.state.password,
      ownerImage : this.state.ownerImage,
      ownerBio : this.state.ownerBio,
      ownerAge : this.state.ownerAge
    }
    api
      .signup(data)
      .then(result => {
        console.log('SUCCESS!=====>', result)
        this.props.history.push('/') // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="Signup">
        <h2>Signup</h2>
        <form>
          Username:{' '}
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          Name:{' '}
          <input
            type="text"
            value={this.state.ownerName}
            name="ownerName"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          ImageURL:{' '}
          <input
            type="text"
            value={this.state.ownerImage}
            name="ownerImage"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          About you:{' '}
          <input
            type="text"
            value={this.state.ownerBio}
            name="ownerBio"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          Aage:{' '}
          <input
            type="text"
            value={this.state.ownerAge}
            name="ownerAge"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          Password:{' '}
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          <button onClick={e => this.handleClick(e)}>Signup</button>
        </form>
        {this.state.message && (
          <div className="info info-danger">{this.state.message}</div>
        )}
      </div>
    )
  }
}
