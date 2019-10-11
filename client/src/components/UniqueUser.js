import React, { Component } from 'react'
import Axios from 'axios'

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

    console.log('IN UNIQUE USER')

    Axios.get(`http://localhost:5000/api/users/${id}`)
      .then(response => {
        console.log(response)
        this.setState({
          ownerImage: response.data.user[0].ownerImage,
          ownerName: response.data.user[0].ownerName,
          ownerAge: response.data.user[0].ownerAge,
          ownerBio: response.data.user[0].ownerBio,
          dogImage: response.data.dog[0].dogImage,
          dogName: response.data.dog[0].dogName,
          dogAge: response.data.dog[0].dogAge,
          dogBio: response.data.dog[0].dogBio,
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
      {/* Dog info */}
      <img src={this.state.dogImage} alt='doggie' />
      <h3>{this.state.dogName}</h3>
      <h3>{this.state.dogAge}</h3>
      <p>{this.state.dogBio}</p>
      {/* Owner info */}
      <img src={this.state.ownerImage} alt='owner' />
      <h3>{this.state.ownerName}</h3>
      <h3>{this.state.ownerAge}</h3>
      <p>{this.state.ownerBio}</p>
      </div>
    )
  }
}

export default UniqueUser
