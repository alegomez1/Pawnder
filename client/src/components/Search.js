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
    actualResults: [],
    largeDog: 'off'
  }

  search = async () => {
    // Axios.get(`${url}/api/city/${this.state.search}`).then(
    //Have to reset state or the arrays keep increasing in size
    this.setState({
      results: [],
      actualResults: [],
    })
    await Axios.get(`${url}/api/users`).then(results => {
      let allUsers = results.data.user
      allUsers.map(eachUser => {
        if (eachUser.city === this.state.search) {
          this.state.actualResults.push(eachUser)
        }
      })
    }) //Somehow vvvv fixed the display issue
    this.setState({
      numberOfResults: this.state.actualResults.length,
    })
    this.displayUsers()
  }

  displayUsers = () => {
    let displayedResults = this.state.actualResults.map((eachUser, i) => {
      console.log('current state-----', this.state)
      return (
        <Link key={i} to={`/user/${eachUser._id}`}>
          <div className="search-result">
            <div className="row">
              <div className="col">
                <img className="search-result-image" src={eachUser.dogImage} />
              </div>
              <div className="col">
                <h4>{eachUser.dogName}</h4>
              </div>
              <div className="col">
                <h4>{eachUser.ownerName}</h4>
              </div>
            </div>
          </div>
        </Link>
      )
    })
    return displayedResults
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <div className="search-div">
        <div className="search-field-div">
          <span>
            <input
              type="checkbox"
              name="largeDog"
              onChange={this.handleChange}
            ></input>
            <span>
              <input
                className="search-field"
                type="text"
                placeholder="Search city"
                name="search"
                onChange={this.handleChange}
              ></input>
              {this.search}
              <button
                className="search-button"
                type="submit"
                onClick={this.search}
              >
                <i className="fa fa-search fa-2x"></i>
              </button>
            </span>
            <span>
              <h2>Number of results: {this.state.numberOfResults}</h2>
            </span>
            {this.displayUsers()}
          </span>
        </div>
      </div>
    )
  }
}

export default Search
