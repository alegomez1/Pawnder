import React, { Component } from 'react'
import api from '../api'

class NewSignup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      ownerName: '',
      ownerImage: '',
      ownerBio: '',
      ownerAge: '',
      city: '',
      message: null,
      dogName: '',
      dogImage: '',
      dogBio: '',
      dogAge: '',

      currentStage: 0,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  // Changes state values to what is typed
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  // Submits all info and redirects to profile
  handleClick(e) {
    e.preventDefault()
    let data = {
      username: this.state.username,
      ownerName: this.state.ownerName,
      password: this.state.password,
      ownerImage: this.state.ownerImage,
      ownerBio: this.state.ownerBio,
      ownerAge: this.state.ownerAge,
      city: this.state.city,
      dogName: this.state.dogName,
      dogImage: this.state.dogImage,
      dogBio: this.state.dogBio,
      dogAge: this.state.dogAge,
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
  //Increments/Cycles through what's shown
  incrementCurrentStage = () => {
    this.setState(state => ({
      currentStage: state.currentStage + 1,
    }))
    console.log('Current state', this.state)
    console.log('New stage:', this.state.currentStage)
  }
  //Username and password
  usernameAndPassword = () => {
    return (
      <div className="dynamic-signup-div">
        <input
          className="form-input"
          type="text"
          value={this.state.username}
          name="username"
          placeholder="username"
          onChange={this.handleInputChange}
        />
        <input
          className="form-input"
          type="password"
          value={this.state.password}
          name="password"
          placeholder="password"
          onChange={this.handleInputChange}
        />
        <div className="button-div">
          <button className="test-button" onClick={this.incrementCurrentStage}>
            Next
          </button>
        </div>
      </div>
    )
  }
  // Owner info
  ownerInfo = () => {
    return (
      <div className="dynamic-signup-div">
        <input
          className="form-input"
          type="text"
          value={this.state.ownerName}
          name="ownerName"
          placeholder="Your name"
          onChange={this.handleInputChange}
        />
        <input
          className="form-input"
          type="text"
          value={this.state.ownerAge}
          name="ownerAge"
          placeholder="Age"
          onChange={this.handleInputChange}
        />
        <input
          className="form-input"
          type="text"
          value={this.state.city}
          name="city"
          placeholder="City"
          onChange={this.handleInputChange}
        />
        <input
          className="form-input"
          type="text"
          value={this.state.ownerBio}
          name="ownerBio"
          placeholder="Bio"
          onChange={this.handleInputChange}
        />
        <div className="button-div">
          <button className="test-button" onClick={this.incrementCurrentStage}>
            Next
          </button>
        </div>
      </div>
    )
  }
  // Dog info
  dogInfo = () => {
    return (
      <div className="dynamic-signup-div">
        <input
          className="form-input"
          type="text"
          value={this.state.dogName}
          name="dogName"
          placeholder="Dog's name"
          onChange={this.handleInputChange}
        />
        <input
          className="form-input"
          type="text"
          value={this.state.dogAge}
          name="dogAge"
          placeholder="Age"
          onChange={this.handleInputChange}
        />
        <input
          className="form-input"
          type="text"
          value={this.state.dogBio}
          name="dogBio"
          placeholder="About your dog"
          onChange={this.handleInputChange}
        />
        <input
          className="form-input"
          type="text"
          value={this.state.dogImage}
          name="dogImage"
          placeholder="Image URL"
          onChange={this.handleInputChange}
        />
        <div className="button-div">
          <button onClick={e => this.handleClick(e)}>Finish</button>
        </div>
      </div>
    )
  }
  render() {
    if (this.state.currentStage === 0) {
      return this.usernameAndPassword()
    } else if (this.state.currentStage === 1) {
      return this.ownerInfo()
    } else if (this.state.currentStage === 2) {
      return this.dogInfo()
    }
  }
}

export default NewSignup