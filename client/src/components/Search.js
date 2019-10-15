import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import tennis from './images/tennisballs1.png'
import tennis2 from './images/tennisballs2.png'
import tennis3 from './images/tennisballs3.png'

const url = 'http://localhost:5000'
// const url = 'https://pawnderapp.herokuapp.com'

class Search extends Component {
  state = {
    numberOfResults: '',
    search: '',
    results: [],
    actualResults: [],
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
      if(eachUser.dogActivityLevel === 'Low'){
        eachUser.dogActivityLevel = tennis
      }
      else if(eachUser.dogActivityLevel === 'Moderate'){
        eachUser.dogActivityLevel = tennis2
      }
      else if(eachUser.dogActivityLevel === 'High'){
        eachUser.dogActivityLevel = tennis3
      }
      console.log('eachhh', eachUser.ownerName)
      return (
        <React.Fragment>
        <Link key={i} to={`/user/${eachUser._id}`}>
        <div className='row search-result'>
          <div className='col no-padding'>
          <img className='search-result-image' src={eachUser.dogImage} alt='each dog'/>
          </div>
          <div className='col'>
          <h4 className='align-center search-name'>{eachUser.dogName}</h4>
          <p className='align-center search-bio'>{eachUser.dogBio}</p>
          <img className='tennis-balls' src={eachUser.dogActivityLevel} alt='tennis'></img>
          </div>
        </div>
        </Link>
        </React.Fragment>

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
          <span className='span-test'>
            <input
              className= 'search-field'
              type="text"
              placeholder="Search city"
              name="search"
              onChange={this.handleChange}
            ></input>
            {this.search}
            <button 
            className='search-button'
            type="submit" 
            onClick={this.search}>
              <i className="fa fa-search"></i>
            </button>
          </span>
          {/* <span>
              <h2>Number of results: {this.state.numberOfResults}</h2>
            </span> */}
        </div>
        {this.displayUsers()}
      </div>
    )
  }
}

export default Search