import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import api from '../api'
import GoogleMaps from './GoogleMaps'
import Feed from './Feed'
import axios from 'axios'
// import AddPet from './AddPet'
// import Home from './Home'
// import Axios from 'axios'

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
    posts: [],
    currentPost: '',
  }
  // Getting info from API
  async componentDidMount() {
    let currentUser = await api.getLocalStorageUser()
    let id= currentUser._id

    axios.get(`${url}/api/users/${id}`)
    .then(response => {
      console.log('axios response------',response)
      this.setState({
        ownerImage: response.data.user[0].ownerImage,
        ownerName: response.data.user[0].ownerName,
        ownerAge: response.data.user[0].ownerAge,
        ownerBio: response.data.user[0].ownerBio,
        city: response.data.user[0].city,
        dogImage: response.data.user[0].dogImage,
        dogName: response.data.user[0].dogName,
        dogAge: response.data.user[0].dogAge,
        dogBio: response.data.user[0].dogBio,
      })
    })
    .catch(err => console.log(err))
  }

  handleInputChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {

    console.log('in profile')
    console.log('props=====', this.props)
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
          <div className='col-9 feed'>
            <input
            className='feed-input'
            placeholder="Make a post"
            name= 'currentPost'
            onChange={this.handleInputChange}
            />
            <button
            className='post-button'
            onClick={this.makePost}
            >
              Post!
            </button>
            <Feed/>



            
          </div>
        </div>
      </div>
    )
  }
}
export default UserProfile
