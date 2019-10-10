import React, { Component } from 'react'
import Axios from 'axios'

class Search extends Component {
  state={
    ownerName: '',
    search: 'Miami'
  }
  search = () =>{
    Axios.get(`http://localhost:5000/api/users/${this.state.search}`)
    .then(result=>{
      console.log(result)
      this.setState({
        ownerName: result.data[0].ownerName
      })
    })
  }
  render () {



    return (
      <div>
        <input type='text' placeholder="Search city"></input>
        <button type='text' onClick={this.search}>Search</button>

        <div>
          <h2>Owner info: {this.state.ownerName}</h2>
        </div>
      </div>
    )
  }
}

export default Search