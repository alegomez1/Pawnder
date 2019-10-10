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
        allUsers.map((eachUser)=>{
          console.log('each user:', eachUser)
        })
        this.setState({
          numberOfResults: results.data.length,
          results: allUsers
        })
        console.log('CHECK RESULTS STATE', this.state.results)
      }
    )
  }

  displayUsers = () => {
    console.log('display users function')
    console.log(this.results)
  }
  //  result.map((eachUser,i)=>{
  //   return <div>{eachUser.data[i].ownerName}</div>
  // })

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
      </div>
    )
  }
}

export default Search
