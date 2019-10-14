import React, { Component } from 'react'
import api from '../api'
import Progress from './Progress'

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
      dogSize: '',

      currentStage: 0,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  // Changes state values to what is typed
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
    console.log('current state->', this.state)
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
      dogSize: this.state.dogSize,
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

  decrementCurrentStage = () => {
    this.setState(state => ({
      currentStage: state.currentStage - 1,
    }))
    console.log('Current state', this.state)
    console.log('New stage:', this.state.currentStage)
  }
  //Username and password
  usernameAndPassword = () => {
    return (
      <div className="dynamic-signup-div">
        <Progress section={1} />
        <div className="form-background">
          <h4 id="create-account-header">Create your account</h4>
          <div className="input-div">
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
          </div>
          <div className="button-div">
            <button
              className="form-button-original"
              onClick={this.incrementCurrentStage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    )
  }
  // Owner info
  ownerInfo = () => {
    return (
      <div className="dynamic-signup-div">
        <Progress section={2} />

        <div className="form-background-owner">
          <h4 id="create-account-header">About You</h4>

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
          <textarea
            className="textarea"
            type="text"
            value={this.state.ownerBio}
            name="ownerBio"
            placeholder="Tell us about yourself"
            onChange={this.handleInputChange}
          />
          <div className="button-div">
            <button
              className="form-button-2"
              onClick={this.decrementCurrentStage}
            >
              Back
            </button>
            <button
              className="form-button"
              onClick={this.incrementCurrentStage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    )
  }
  // Dog info
  dogInfo = () => {
    return (
      <div className="dynamic-signup-div">
        <Progress section={3} />
        <div className="form-background-dog">
          <h4 id="create-account-header">Dog's Info</h4>
          <input
            className="form-input"
            type="text"
            value={this.state.dogName}
            name="dogName"
            placeholder="Name"
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
          <h4 id="create-account-header">Size</h4>

          <fieldset>
            <input
              type="radio"
              value="Small"
              name="dogSize"
              onChange={this.handleInputChange}
            />
            <label>Small</label>
            <input
              type="radio"
              value="Medium"
              name="dogSize"
              onChange={this.handleInputChange}
            />
            <label>Medium</label>
            <input
              type="radio"
              value="Large"
              name="dogSize"
              onChange={this.handleInputChange}
            />
            <label>Large</label>
          </fieldset>

          <textarea
            className="textarea"
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
            <button
              className="form-button-2"
              onClick={this.decrementCurrentStage}
            >
              Back
            </button>
            <button className="form-button" onClick={e => this.handleClick(e)}>
              Finish
            </button>
          </div>
        </div>
      </div>
    )
  }
  render() {
    if (this.state.currentStage === 0) {
      return this.dogInfo()

      return this.usernameAndPassword()
    } else if (this.state.currentStage === 1) {
      return this.ownerInfo()
    } else if (this.state.currentStage === 2) {
    }
  }
}

export default NewSignup
