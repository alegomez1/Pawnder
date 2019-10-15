import React, { Component } from 'react'
import Axios from 'axios'
import GoogleMaps from './GoogleMaps'
import { Link } from 'react-router-dom'


// const url = 'http://localhost:5000'
const url = 'https://pawnderapp.herokuapp.com'

class UniqueUser extends Component {
  state = {
    ownerImage: '',
    ownerName: '',
    ownerAge: '',
    ownerBio: '',
    dogName: '',
    dogImage: '',
    dogAge: '',
    dogBio: '',
  }

  componentDidMount() {
    let id = this.props.match.params.id

    Axios.get(`${url}/api/users/${id}`)
      .then(response => {
        console.log(response)
        this.setState({
          ownerImage: response.data.user[0].ownerImage,
          ownerName: response.data.user[0].ownerName,
          ownerAge: response.data.user[0].ownerAge,
          ownerBio: response.data.user[0].ownerBio,
          dogImage: response.data.user[0].dogImage,
          dogName: response.data.user[0].dogName,
          dogAge: response.data.user[0].dogAge,
          dogBio: response.data.user[0].dogBio,
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="profile-div">
        <div className="row text-center">
          <div className="col-3 profile-col">
            <div className="margin-div align-center">
              <Link to='/sendEmail'>
              <button>
                Send Email
              </button>
              </Link>
              <img
                className="profile-dog-image center-block"
                src={this.state.dogImage}
                alt="dogImage"
              />
              <h4 className="profile-header">{this.state.dogName}</h4>
              <p className="profile-text">About: {this.state.dogBio}</p>
              <p className="profile-text">Age: {this.state.dogAge}</p>

              <img
                className="profile-dog-image"
                src={this.state.ownerImage}
                alt="ownerImage"
              />
              <h4 className="profile-header">{this.state.ownerName}</h4>
              <p className="profile-text">About: {this.state.ownerBio}</p>
              <p className="profile-text">City: {this.state.city}</p>
              <p className="profile-text">Age: {this.state.ownerAge}</p>
              <p className="profile-text">IMAGE</p>
            </div>
          </div>
          <div className='col-9 map'>
      <GoogleMaps/>
          </div>
        </div>
      </div>
    )
  }
}
export default UniqueUser
