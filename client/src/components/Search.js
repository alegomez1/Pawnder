import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import tennis from './images/tennisballs1.png'
import tennis2 from './images/tennisballs2.png'
import tennis3 from './images/tennisballs3.png'
import size1 from './images/dogSize1.png'
import size2 from './images/dogSize2.png'
import size3 from './images/dogSize3.png'

const url = 'http://localhost:5000'
// const url = 'https://pawnderapp.herokuapp.com'

class Search extends Component {
  state = {
    sortActivity: false,
    sortName: false,
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
  sortByActivity = () => {
    return this.state.actualResults.sort(
      (a, b) => a.dogActivityLevel - b.dogActivityLevel
    )
  }
  sortByName = () => {
    return this.state.actualResults.sort(
      (a,b) => {
        if(a.dogName > b.dogName){
        return 1
      }else{
        return -1
      }
    }
    )
  }
  reverseSortByActivity = () => {
    return this.state.actualResults.sort(
      (a, b) => b.dogActivityLevel - a.dogActivityLevel
    )
  }
  displayUsers = () => {
    let displayedResults
    if (this.state.sortActivity === true) {
      console.log('TRUE SO SORTING BY ACTIVITY')
      displayedResults = this.sortByActivity().map((eachUser, i) => {
        if (eachUser.dogActivityLevel === 1) {
          eachUser.tennis = tennis
        } else if (eachUser.dogActivityLevel === 2) {
          eachUser.tennis = tennis2
        } else if (eachUser.dogActivityLevel === 3) {
          eachUser.tennis = tennis3
        }
        if (eachUser.dogSize === 'Small') {
          eachUser.dogSize = size1
        } else if (eachUser.dogSize === 'Medium') {
          eachUser.dogSize = size2
        } else if (eachUser.dogSize === 'Large') {
          eachUser.dogSize = size3
        }
        return (
          <React.Fragment key={i}>
            <Link to={`/user/${eachUser._id}`}>
              <div className="row search-result">
                <div className="col no-padding">
                  <img
                    className="search-result-image"
                    src={eachUser.dogImage}
                    alt="each dog"
                  />
                </div>
                <div className="col testcol">
                  <h4 className="search-name">{eachUser.dogName}</h4>
                  <p className="search-bio">{eachUser.dogBio}</p>
                  <div className="row tennis-balls-row">
                    <div className="col">
                      {/* <p>Activity: </p> */}
                      <img
                        className="tennis-balls"
                        src={eachUser.tennis}
                        alt="tennis"
                      ></img>
                    </div>
                    {/* <p>Size: </p> */}
                    <div className="col size-div">
                      <img
                        className="dog-size"
                        src={eachUser.dogSize}
                        alt="size"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </React.Fragment>
        )
      })
    }

    // Filter by name
   else if (this.state.sortName === true) {
      console.log('TRUE SO SORTING BY NAME')
      displayedResults = this.sortByName().map((eachUser, i) => {
        if (eachUser.dogActivityLevel === 1) {
          eachUser.tennis = tennis
        } else if (eachUser.dogActivityLevel === 2) {
          eachUser.tennis = tennis2
        } else if (eachUser.dogActivityLevel === 3) {
          eachUser.tennis = tennis3
        }
        if (eachUser.dogSize === 'Small') {
          eachUser.dogSize = size1
        } else if (eachUser.dogSize === 'Medium') {
          eachUser.dogSize = size2
        } else if (eachUser.dogSize === 'Large') {
          eachUser.dogSize = size3
        }
        return (
          <React.Fragment key={i}>
            <Link to={`/user/${eachUser._id}`}>
              <div className="row search-result">
                <div className="col no-padding">
                  <img
                    className="search-result-image"
                    src={eachUser.dogImage}
                    alt="each dog"
                  />
                </div>
                <div className="col testcol">
                  <h4 className="search-name">{eachUser.dogName}</h4>
                  <p className="search-bio">{eachUser.dogBio}</p>
                  <div className="row tennis-balls-row">
                    <div className="col">
                      {/* <p>Activity: </p> */}
                      <img
                        className="tennis-balls"
                        src={eachUser.tennis}
                        alt="tennis"
                      ></img>
                    </div>
                    {/* <p>Size: </p> */}
                    <div className="col size-div">
                      <img
                        className="dog-size"
                        src={eachUser.dogSize}
                        alt="size"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </React.Fragment>
        )
      })
    }

    //If nothing is checked
    else {
      displayedResults = this.state.actualResults.map((eachUser, i) => {
        console.log('FALSE SO NOTTTTT SORTING BY ACTIVITY')

        if (eachUser.dogActivityLevel === 1) {
          eachUser.tennis = tennis
        } else if (eachUser.dogActivityLevel === 2) {
          eachUser.tennis = tennis2
        } else if (eachUser.dogActivityLevel === 3) {
          eachUser.tennis = tennis3
        }
        if (eachUser.dogSize === 'Small') {
          eachUser.dogSize = size1
        } else if (eachUser.dogSize === 'Medium') {
          eachUser.dogSize = size2
        } else if (eachUser.dogSize === 'Large') {
          eachUser.dogSize = size3
        }
        return (
          <React.Fragment key={i}>
            <Link to={`/user/${eachUser._id}`}>
              <div className="row search-result">
                <div className="col no-padding">
                  <img
                    className="search-result-image"
                    src={eachUser.dogImage}
                    alt="each dog"
                  />
                </div>
                <div className="col testcol">
                  <h4 className="search-name">{eachUser.dogName}</h4>
                  <p className="search-bio">{eachUser.dogBio}</p>
                  <div className="row tennis-balls-row">
                    <div className="col">
                      {/* <p>Activity: </p> */}
                      <img
                        className="tennis-balls"
                        src={eachUser.tennis}
                        alt="tennis"
                      ></img>
                    </div>
                    {/* <p>Size: </p> */}
                    <div className="col size-div">
                      <img
                        className="dog-size"
                        src={eachUser.dogSize}
                        alt="size"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </React.Fragment>
        )
      })
    }

    return displayedResults
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log('state-----', this.state)
    this.displayUsers()
  }

  changeButton = e => {
    this.setState({
      [e.target.name]: !e.target.checked,
    })
    console.log('changing button', this.state)
    this.search()
  }

  render() {
    return (
      <div className="search-div">
        <div className="search-field-div">
          <span className="span-test">
            <input
              className="search-field"
              type="text"
              placeholder="Search city"
              name="search"
              onChange={this.handleChange}
            ></input>
            <button
              className="search-button"
              type="submit"
              onClick={this.search}
            >
              <i className="fa fa-search"></i>
            </button>
            {/* Filter by activity */}
            <input
              className="sort-activity"
              type="checkbox"
              name="sortActivity"
              onChange={this.changeButton}
            ></input>
            <label id="sort-activity-label">Sort by activity</label>
            {/* Filter by name */}
            <input
              className="sort-activity"
              type="checkbox"
              name="sortName"
              onChange={this.changeButton}
            ></input>
            <label id="sort-activity-label">Sort by name</label>

            {/* {this.search} */}
          </span>
        </div>
        {this.displayUsers()}
      </div>
    )
  }
}
export default Search
