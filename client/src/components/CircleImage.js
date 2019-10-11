import React, { Component } from 'react'
import api from '../api'
import Axios from 'axios'
const url = 'http://localhost:5000'
// const url = 'https://pawnderapp.herokuapp.com'

class CircleImage extends Component {

  state={
    dogImage: ''
  }


  // Getting info from API
  async componentDidMount() {
    let current = await api.getLocalStorageUser()
    if (current != null) {

      await Axios.get(`${url}/api/dog/${current._id}`).then(result => {
        let dog = result.data

        if (dog !== null) {
          console.log('dog result', dog)
          this.setState({

            dogImage: dog.dogImage, 
          })
        }
      })
    }
  }
  render () {
    return (
      <img className= 'circle-image' src={this.state.dogImage} alt=""/>
    )
  }
}

export default CircleImage