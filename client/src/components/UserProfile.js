import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import api from '../api'
// import AddPet from './AddPet'
// import Home from './Home'
import Axios from 'axios'

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
  }
  // Getting info from API
  async componentDidMount() {
    let current = await api.getLocalStorageUser()
    console.log(current)
    if (current != null) {
      this.setState({
        ownerImage: current.ownerImage,
        ownerName: current.username,
        ownerBio: current.ownerBio,
        ownerAge: current.ownerAge,
      })
      await Axios.get(`http://localhost:5000/api/dog/${current._id}`).then(result => {
        console.log('DOG INFO===>', result.data)
        let dog = result.data

        if (dog.length > 0) {
          this.setState({
            dogImage: dog.dogImage,
            dogName: dog.dogName,
            dogBio: dog.dogBio,
            dogAge: dog.dogAge,
            dogActivities: dog.dogActivities,
          })
        }
      })
    }
  }
  checkHasPet = () => {
    if (this.state.dogName !== '') {
      return (
        <div>
          <h2>Dog Profile Page</h2>
          <img src={this.state.dogImage} alt="dogImage" />
          <h4>Name: {this.state.dogName}</h4>
          <p>Bio: {this.state.dogBio}</p>
          <p>Age: {this.state.dogAge}</p>
          <p>Activities: {this.state.dogActivities}</p>
        </div>
      )
    } else {
      return (
        <div>
          <NavLink to="/addPet">
            <button>Add Pet</button>
          </NavLink>
          <br />
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.checkHasPet()}
        <img src="" alt="ownerImage" />
        <h4>{this.state.ownerName}</h4>
        <p>Bio: {this.state.ownerBio}</p>
        <p>Age: {this.state.ownerAge}</p>
        <p>Activities: </p>
      </div>
    )
  }
}

export default UserProfile
