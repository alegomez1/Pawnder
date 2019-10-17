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
    posts: this.props.posts
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

      console.log('new propssssssss', this.props)
    }

    displayPosts = () =>{
      let allPosts = this.state.posts.map((eachPost, i)=>{
        console.log(eachPost)
        return(
          <h3 key={i}>{eachPost}</h3>
        )
      })
      return allPosts
   
      
    }

  render () {

    return (
      <div>
        <h1>Here is the feed for {this.state.ownerName}</h1>
        {this.displayPosts()}
      </div>
    )
  }
}

export default Feed