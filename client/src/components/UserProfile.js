import React, { Component } from 'react'
import api from '../api'

class UserProfile extends Component {

  state={
    dogImage: '',
    dogName: '',
    dogBio: '',
    dogAge: '',
    dogActivities: '',
    ownerImage: '',
    ownerName: '',
    ownerBio: '',
  }

  // Getting info from API
  async componentDidMount(){  
    let current = await api.getLocalStorageUser()
    if(current != null){
      this.setState({
        ownerName:current.username
      })
    }
    }
  render () {
    return (
      <div>
        <h2>Profile page</h2>
        <img src = '' alt ='dog image'/>
        <h4>Name</h4>
        <p>Bio: </p>
        <p>Age: </p>
        <p>Activities: </p>

        <img src = '' alt ='owner image'/>
        <h4>{this.state.ownerName}</h4>
        <p>Bio: </p>
        <p>Age: </p>
        <p>Activities: </p>
      </div>
    )
  }
}

export default UserProfile