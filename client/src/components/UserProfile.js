import React, { Component } from 'react'
import api from '../api'

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
    hasPet: false,
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
      })
    }
  }

  addPet = () => {
    console.log('ADD PET BUTTON PRESSED')
  }

  checkHasPet = () => {
    if (this.state.hasPet) {
      return (
        <div>
          <h2>Profile page</h2>
          <img src="" alt="dog image" />
          <h4>Name</h4>
          <p>Bio: </p>
          <p>Age: </p>
          <p>Activities: </p>
        </div>
      )
    }
    else{
      return(
          <div>
          <button onClick={this.addPet}>Add Pet</button>
          <br/>
          </div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.checkHasPet()}

        <img src="" alt="owner image" />
        <h4>{this.state.ownerName}</h4>
        <p>Bio: {this.state.ownerBio}</p>
        <p>Age: {this.state.ownerAge}</p>
        <p>Activities: </p>
      </div>
    )
  }
}

export default UserProfile
