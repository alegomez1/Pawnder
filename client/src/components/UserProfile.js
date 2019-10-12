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

      // await Axios.get(`${url}/api/dog/${current._id}`).then(result => {
      //   let dog = result.data

      //   if (dog !== null) {
      //     console.log('dog result', dog)
      //     this.setState({
      //       dogImage: dog.dogImage,
      //       dogName: dog.dogName,
      //       dogBio: dog.dogBio,
      //       dogAge: dog.dogAge,
      //       dogActivities: dog.dogActivities,
            
      //     })
      //   }
      // })
    }
  }
  // checkHasPet = () => {
  //   if (this.state.dogName !== '') {
  //     return (
  //       <div>
  //         <h2>Dog Profile Page</h2>
  //         <img src={this.state.dogImage} alt="dogImage" />
  //         <h4>Name: {this.state.dogName}</h4>
  //         <p>Bio: {this.state.dogBio}</p>
  //         <p>Age: {this.state.dogAge}</p>
  //         <p>Activities: {this.state.dogActivities}</p>
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div>
  //         <NavLink to="/addPet">
  //           <button>Add Pet</button>
  //         </NavLink>
  //         <br />
  //       </div>
  //     )
  //   }
  // }
  render() {
    return (
      <div>
        {/* {this.checkHasPet()} */}
        <img src={this.state.dogImage} alt="dogImage" />
        <h4>{this.state.dogName}</h4>
        <p>Bio: {this.state.dogBio}</p>
        <p>Age: {this.state.dogAge}</p>

        <img src={this.state.ownerImage} alt="ownerImage" />
        <h4>{this.state.ownerName}</h4>
        <p>Bio: {this.state.ownerBio}</p>
        <p>City: {this.state.city}</p>
        <p>Age: {this.state.ownerAge}</p>

      </div>
    )
  }
}

export default UserProfile
