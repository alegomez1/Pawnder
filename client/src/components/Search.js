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
    actualResults: []
  }

  search = async () => {
    // Axios.get(`${url}/api/city/${this.state.search}`).then(
    await Axios.get(`${url}/api/users`).then(
      results => {
        let allUsers = results.data.user
        console.log('All results==:',allUsers)
        allUsers.map((eachUser)=>{
          console.log('single user:', eachUser.ownerName)
          console.log('current search:', this.state.search)

          if(eachUser.city === this.state.search){
            return(
              <div><h1>
                {eachUser.ownerName}
              </h1></div>
            )
          }
        })

        console.log('finished push', this.state.results)


        // this.setState({
        //   numberOfResults: results.data.length,
        //   results: allUsers,
        // })
      }
    )
  }

  displayUsers = () => {

    console.log('current search term:', this.state.search)
    // return this.state.results.map((eachUser,i) => {

    //   // if(eachUser[i].city==='Miami'){
    //   //   return(
    //   //     <div>{eachUser.ownerName}</div>
    //   //   )
    //   // }
    //   // return(
    //   // <Link key={i} to={`/user/${eachUser._id}`}>
    //   // <div className="search-result">
    //   // {eachUser.ownerName}
    //   // </div></Link>)
    // })
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
        {/* <button type="text" onClick={this.search}>
          Search
        </button> */}
        {/* {this.search()} */}
        <button type="submit" onClick={this.search}><i className="fa fa-search"></i></button>
        <span>
          <h2>Number of results: {this.state.numberOfResults}</h2>
        </span>
        {/* {this.displayUsers()} */}
      </span>
    )
  }
}

export default Search
