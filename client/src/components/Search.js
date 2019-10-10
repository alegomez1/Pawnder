import React, { Component } from 'react'
import Axios from 'axios'

class Search extends Component {
  state={
    ownerName: '',
    search: ''
  }

  search = () =>{
    Axios.get(`http://localhost:5000/api/users/${this.state.search}`)
    .then(result=>{
      console.log('Search term:', this.state.search)
      console.log(result)
      this.setState({
        ownerName: result.data.length
      })
    })
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render () {



    return (
      <div>
        <input type='text' placeholder="Search city" name="search" onChange={this.handleChange}></input>
        <button type='text' onClick={this.search}>Search</button>
        <div>
          <h2>Owner info: {this.state.ownerName}</h2>
        </div>
      </div>
    )
  }
}

export default Search