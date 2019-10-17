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
      city: '',
      message: null,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    if(event.target.name === 'city'){
      console.log('changing cityyyyyyy')
      this.setState({
        [event.target.name]: event.target.value.toLowerCase()
      })
    }else{
    this.setState({
      [event.target.name]: event.target.value,
    })}
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      username: this.state.username,
      ownerName: this.state.ownerName,
      password: this.state.password,
      ownerImage: this.state.ownerImage,
      ownerBio: this.state.ownerBio,
      ownerAge: this.state.ownerAge,
      city: this.state.city
    }
    api
      .signup(data)
      .then(result => {
        console.log('SUCCESS!=====>', result)
        this.props.getUser()
        this.props.history.push('/') // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="signup">
        <h2 className="header-text">Signup</h2>
        <div className="form-div">
        <form>
          {/* Username:{' '} */}
          <input className="form-input"
            type="text"
            value={this.state.username}
            name="username"
            placeholder="username"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          {/* Name:{' '} */}
          <input className="form-input"
            type="text"
            value={this.state.ownerName}
            name="ownerName"
            placeholder="Your name"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          {/* ImageURL:{' '} */}
          <input className="form-input"
            type="text"
            value={this.state.ownerImage}
            name="ownerImage"
            placeholder="Image URL"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          {/* About you:{' '} */}
          <input className="form-input"
            type="text"
            value={this.state.ownerBio}
            name="ownerBio"
            placeholder="Bio"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          {/* City:{' '} */}
          <input className="form-input"
            type="text"
            value={this.state.city}
            name="city"
            placeholder="City"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          {/* Age:{' '} */}
          <input className="form-input"
            type="text"
            value={this.state.ownerAge}
            name="ownerAge"
            placeholder="Age"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          {/* Password:{' '} */}
          <input className="form-input"
            type="password"
            value={this.state.password}
            name="password"
            placeholder="password"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          <div className="button-div">
          <button className="form-button btn btn-md btn-dark" onClick={e => this.handleClick(e)}>Signup</button>
          </div>
        </form>
        {this.state.message && (
          <div className="info info-danger ">{this.state.message}</div>
        )}
        </div>
      </div>
    )
  }
}
