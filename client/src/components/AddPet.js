import React, { Component } from 'react'
// import { Route, Link, NavLink, Switch } from 'react-router-dom'
import api from '../api'

export default class AddPet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dogName: '',
      dogImage: '',
      dogBio: '',
      dogAge: '',
      message: null,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    let data = {
      dogName: this.state.dogName,
      dogImage: this.state.dogImage,
      dogBio: this.state.dogBio,
      dogAge: this.state.dogAge,
    }
    console.log('hi')

    api
      .addDog(data)
      .then(result => {
        console.log('SUCCESS!=====>', result)
        this.props.toggleHasPet()
        this.props.history.push('/profile') // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="signup">
        <h2 className="header-text">Add Dog</h2> {this.state.message}
        <div className="form-div">
        <form onSubmit={this.handleSubmit}>
          {/* Dog's Name:{' '} */}
          <input className="form-input"
            type="text"
            value={this.state.dogName}
            name="dogName"
            placeholder="Dog's name"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          {/* ImageURL:{' '} */}
          <input className="form-input"
            type="text"
            value={this.state.dogImage}
            name="dogImage"
            placeholder="Image URL"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          {/* About your pet:{' '} */}
          <input className="form-input"
            type="text"
            value={this.state.dogBio}
            name="dogBio"
            placeholder="About your dog"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          {/* Age:{' '} */}
          <input className="form-input"
            type="text"
            value={this.state.dogAge}
            name="dogAge"
            placeholder="Age"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          {/* <Link
            to={{
              pathname: '/profile',
              petProps: {
                hasPet: true,
              },
            }}
          > */}
          <div className="button-div">
          <input className="form-button btn btn-md btn-dark" 
          type="submit" 
          value="Add Pet" />
          </div>
          <div className="button-div"></div>
          {/* </Link> */}
        </form>
        {this.state.message && (
          <div className="info info-danger">{this.state.message}</div>
        )}
        </div>
      </div>
    )
  }
}
