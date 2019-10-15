import React, { Component } from 'react'
import api from '../api'
import Progress from './Progress'
import tennis from '../components/images/tennisballs1.png'

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
      dogActivityLevel: '',
      level: '',

      currentStage: 0,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  //Uploading images
  uploadOwnerImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'pawnderImage')
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/pawnder/image/upload',
      {
        method: 'POST',
        body: data,
      }
    )
    const file = await res.json()
    console.log('fileeee', file)
    this.setState({
      ownerImage: file.eager[0].secure_url,
    })
  }
  uploadDogImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'pawnderImage')
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/pawnder/image/upload',
      {
        method: 'POST',
        body: data,
      }
    )
    const file = await res.json()
    this.setState({
      dogImage: file.eager[0].secure_url,
    })
  }

  // Changes state values to what is typed
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
    this.convertActivityToNumbers()
    console.log('current state->', this.state)
  }

  activityNumbers(event) {
    if (event.target.value === 'Low'){
      event.target.value = 1
      this.setState({
        [event.target.name]: event.target.value,
      })
    }
    if (event.target.value === 'Moderate'){
      event.target.value = 2
      this.setState({
        [event.target.name]: event.target.value,
      })
    }
    if (event.target.value === 'High'){
      event.target.value = 3
      this.setState({
        [event.target.name]: event.target.value,
      })
    }

    console.log('current state->', this.state)
  }

  convertActivityToNumbers = () =>{
    console.log('updating numbers')
    if(this.state.dogActivityLevel === 'Low'){
      this.setState({
        dogActivityLevel: 1
      })
      console.log('updated one')
    }

    if(this.state.dogActivityLevel === 'Moderate'){
      this.setState({
        dogActivityLevel: 2
      })
      console.log('updated two')

    }

    if(this.state.dogActivityLevel === 'High'){
      this.setState({
        dogActivityLevel: 3
      })
      console.log('updated three')

    }
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
      dogActivityLevel: this.state.dogActivityLevel,
      level: this.state.level
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
      </div>
    )
  }
  // Owner info
  ownerInfo = () => {
    console.log('state----', this.state)
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
          <div className="image-upload-div">
            <h5 className="image-header">Image</h5>
            <input
              id="upload-button"
              className="form-input-2"
              type="file"
              name="file"
              placeholder="Upload an image"
              onChange={this.uploadOwnerImage}
            />
          </div>

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

          <h4 id="size-activity-header">Size</h4>
          <div className="size-div">
            <fieldset>
              <input
                className="size-input"
                type="radio"
                value='Small'
                name="dogSize"
                onChange={this.handleInputChange}
              />
              <label className="size-input">Small</label>
              <input
                className="size-input"
                type="radio"
                value="Medium"
                name="dogSize"
                onChange={this.handleInputChange}
              />
              <label className="size-input">Medium</label>
              <input
                className="size-input"
                type="radio"
                value="Large"
                name="dogSize"
                onChange={this.handleInputChange}
              />
              <label className="size-input">Large</label>
            </fieldset>
          </div>

          <h4 id="size-activity-header">Activity Level</h4>
          <div className="size-div">
            <fieldset>
              <input
                className="size-input"
                type="radio"
                value="Low"
                name="dogActivityLevel"
                onChange={this.handleInputChange}
              />
              <label className="size-input">Low</label>
              <input
                className="size-input"
                type="radio"
                value="Moderate"
                name="dogActivityLevel"
                onChange={this.handleInputChange}
              />
              <label className="size-input">Moderate</label>
              <input
                className="size-input"
                type="radio"
                value="High"
                name="dogActivityLevel"
                onChange={this.handleInputChange}
              />
              <label className="size-input">High</label>
            </fieldset>
          </div>

          <textarea
            className="textarea"
            type="text"
            value={this.state.dogBio}
            name="dogBio"
            placeholder="About your dog"
            onChange={this.handleInputChange}
          />

          <div className="image-upload-div">
            <h5 className="image-header">Image</h5>
            <input
              id="upload-button"
              className="form-input-2"
              type="file"
              name="file"
              placeholder="Upload an image"
              onChange={this.uploadDogImage}
            />
          </div>

          

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
    console.log('currentstate======', this.state)
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
