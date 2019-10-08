import React, { Component } from 'react'
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

  handleClick(e) {
    e.preventDefault()
    let data = {
      dogName: this.state.dogName,
      dogImage : this.state.dogImage,
      dogBio : this.state.dogBio,
      dogAge : this.state.dogAge
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
        <h2>Add Dog</h2>
        <form>
          Dog's Name:{' '}
          <input
            type="text"
            value={this.state.dogName}
            name="dogName"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          ImageURL:{' '}
          <input
            type="text"
            value={this.state.dogImage}
            name="dogImage"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          About your pet:{' '}
          <input
            type="text"
            value={this.state.dogBio}
            name="dogBio"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          Age:{' '}
          <input
            type="text"
            value={this.state.dogAge}
            name="dogAge"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          <button onClick={e => this.handleClick(e)}>Add Pet</button>
        </form>
        {this.state.message && (
          <div className="info info-danger">{this.state.message}</div>
        )}
      </div>
    )
  }
}
