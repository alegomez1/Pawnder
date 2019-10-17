import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import api from '../api'
import GoogleMaps from './GoogleMaps'
// import AddPet from './AddPet'
// import Home from './Home'
// import Axios from 'axios'

// const url = 'http://localhost:5000'
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
        <div className="row text-center">
          <div className="col-3 profile-col">
            <div className="margin-div align-center">
              <img
                className="profile-dog-image center-block"
                src={this.state.dogImage}
                alt="dogImage"
              />
              <h4 className="profile-header">{this.state.dogName}</h4>
              <p className="profile-text">About: {this.state.dogBio}</p>
              <p className="profile-text">Age: {this.state.dogAge}</p>

              <img
                className="profile-dog-image"
                src={this.state.ownerImage}
                alt="ownerImage"
              />
              <h4 className="profile-header">{this.state.ownerName}</h4>
              <p className="profile-text">About: {this.state.ownerBio}</p>
              <p className="profile-text">City: {this.state.city}</p>
              <p className="profile-text">Age: {this.state.ownerAge}</p>
              <p className="profile-text">IMAGE</p>
            </div>
          </div>
          {/* FEED SECTION */}
          <div className='col-9 map'>

          </div>
        </div>
      </div>
    )
  }
}
export default UserProfile
