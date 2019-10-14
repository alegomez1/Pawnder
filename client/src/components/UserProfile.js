import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import api from '../api'
// import AddPet from './AddPet'
// import Home from './Home'
import Axios from 'axios'

const url = 'http://localhost:5000'
// const url = 'https://pawnderapp.herokuapp.com'

class UserProfile extends Component {
  state = {
    dogImage: '',
    dogName: '',
    dogBio: '',
    dogAge: '',
    dogActivities: '',
    ownerImage: '',
    ownerName: '',
    ownerBio: '',
    ownerAge: '',
    ownerActivities: '',
    city: '',
  }
  // Getting info from API
  async componentDidMount() {
    let current = await api.getLocalStorageUser()
    console.log('curent.....', current)
    if (current != null) {
      this.setState({
        ownerImage: current.ownerImage,
        ownerName: current.username,
        ownerBio: current.ownerBio,
        ownerAge: current.ownerAge,
        city: current.city,

        dogImage: current.dogImage,
        dogName: current.dogName,
        dogBio: current.dogBio,
        dogAge: current.dogAge,
      })
    }
  }
  render() {
    return (
      <div className="profile-div">
      
        <img className="profile-dog-image" src={this.state.dogImage} alt="dogImage" />
        <h4>{this.state.dogName}</h4>
        <p>About: {this.state.dogBio}</p>
        <p>Age: {this.state.dogAge}</p>

        <img src={this.state.ownerImage} alt="ownerImage" />
        <h4>{this.state.ownerName}</h4>
        <p>About: {this.state.ownerBio}</p>
        <p>City: {this.state.city}</p>
        <p>Age: {this.state.ownerAge}</p>

      </div>
    )
  }
}

export default UserProfile
