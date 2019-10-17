import React, { Component } from 'react'
import api from '../api'

class Feed extends Component {

  state={
    ownerImage: '',
    ownerName: ''
  }


    // Getting info from API
    async componentDidMount() {
      let current = await api.getLocalStorageUser()
      console.log('curent.....', current)
      if (current != null) {
        this.setState({
          ownerImage: current.ownerImage,
          ownerName: current.username,
          // ownerBio: current.ownerBio,
          // ownerAge: current.ownerAge,
          // city: current.city,
  
          // dogImage: current.dogImage,
          // dogName: current.dogName,
          // dogBio: current.dogBio,
          // dogAge: current.dogAge,
        })
      }
    }


  render () {
    console.log('in the feed')
    console.log(this.props.info)
    return (
      <div>
        <h1>Here is the feed for {this.state.ownerName}</h1>
      </div>
    )
  }
}

export default Feed