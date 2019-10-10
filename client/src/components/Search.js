import React, { Component } from 'react'
import Axios from 'axios'

class Search extends Component {
  state = {
    numberOfResults: '',
    search: '',
    results: [],
  }

  search = () => {
    Axios.get(`http://localhost:5000/api/users/${this.state.search}`).then(
      results => {
        console.log(results.data)
        let allUsers = results.data

        this.setState({
          numberOfResults: results.data.length,
          results: allUsers,
        })
      }
    )
  }

  displayUsers = () => {
    console.log('In display users')
    console.log('checking param names',)
    return this.state.results.map((eachUser,i) => {
      console.log('each user:', eachUser)
      return <li key={i}>{eachUser.ownerName}</li>
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search city"
          name="search"
          onChange={this.handleChange}
        ></input>
        <button type="text" onClick={this.search}>
          Search
        </button>
        <div>
          <h2>Number of results: {this.state.numberOfResults}</h2>
        </div>
        {this.displayUsers()}



      </div>
    )
  }
}

export default Search
