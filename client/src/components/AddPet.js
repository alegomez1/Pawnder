import React, { Component } from 'react'
import { Route, Link, NavLink, Switch } from 'react-router-dom'
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
      <div className="Signup">
        <h2>Add Dog</h2> {this.state.message}
        <form onSubmit={this.handleSubmit}>
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
          {/* <Link
            to={{
              pathname: '/profile',
              petProps: {
                hasPet: true,
              },
            }}
          > */}
          <input type="submit" value="Add Pet" />
          {/* </Link> */}
        </form>
        {this.state.message && (
          <div className="info info-danger">{this.state.message}</div>
        )}
      </div>
    )
  }
}
