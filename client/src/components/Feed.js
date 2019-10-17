import React, { Component } from 'react'
import axios from 'axios'
import api from '../api'

const url = 'http://localhost:5000'
// const url = 'https://pawnderapp.herokuapp.com'

class Feed extends Component {

  state={
    ownerImage: '',
    ownerName: '',
    userID: this.props.userID,
    posts: []
  }


    // Getting info from API
     componentDidMount() {
      setTimeout(() => {
        axios.get(`${url}/api/users/${this.props.userID}`)
        .then(response=>{
          
          console.log('feed axios response-----', response)
          this.setState({
            posts: response.data.user[0].posts
          })
        })
      }, 2000);
    }


  render () {

    console.log('user posts-----', this.state.posts)

    return (
      <div>
        <h1>Here is the feed for {this.state.ownerName}</h1>
      </div>
    )
  }
}

export default Feed