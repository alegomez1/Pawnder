import React, { Component } from 'react'
import Axios from 'axios'

class Search extends Component {
  state={
    ownerName: '',
    search: 'Miami'
  }

  render () {

    Axios.get(`http://localhost:5000/api/users/${this.state.search}`)
    .then(result=>{
      console.log(result)
    })

    return (
      <div>
        <input type='text' placeholder="Search city"></input>

        <div>
          <h2>Owner info: </h2>
        </div>
      </div>
    )
  }
}

export default Search