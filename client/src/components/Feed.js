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
      setInterval(() => {
        axios.get(`${url}/api/users/${this.props.userID}`)
        .then(response=>{
          this.setState({
            posts: response.data.user[0].posts
          })
        })
      }, 1000);
    }

    sortByActivity = () => {
      return this.state.posts.sort(
        (a, b) => a - b
      )
    }

    displayPosts = () =>{


      let reverse = this.state.posts.map((_, idx, arr) => arr[arr.length - 1 - idx ]);

      let allPosts = reverse.map((eachPost, i)=>{
        // console.log(eachPost)
        return(
          <div key={i} className='feed-post'>
          <p className='feed-paragraph'>{eachPost}</p>
          </div>
        )
      })
      return allPosts
      
    }

  render () {

    return (
      <div>
        {this.displayPosts()}
      </div>
    )
  }
}

export default Feed