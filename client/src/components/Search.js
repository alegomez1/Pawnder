import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const url = 'http://localhost:5000'
// const url = 'https://pawnderapp.herokuapp.com'

class Search extends Component {
  state = {
    numberOfResults: '',
    search: '',
    results: [],
  }

  search = () => {
    Axios.get(`${url}/api/city/${this.state.search}`).then(
      results => {
        let allUsers = results.data
        this.setState({
          numberOfResults: results.data.length,
          results: allUsers,
        })
      }
    )
  }

  displayUsers = () => {
    return this.state.results.map((eachUser,i) => {
      return(
      <Link key={i} to={`/user/${eachUser._id}`}>
      <div >
      {eachUser.ownerName}
      </div></Link>)
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <span>
        <input
          type="text"
          placeholder="Search city"
          name="search"
          onChange={this.handleChange}
        ></input>
        <button type="text" onClick={this.search}>
          Search
        </button>
        {/* <span>
          <h2>Number of results: {this.state.numberOfResults}</h2>
        </span> */}
        {this.displayUsers()}
      </span>
    )
  }
}

export default Search
