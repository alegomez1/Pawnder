import React, { Component } from 'react'
import Axios from 'axios'

class UniqueUser extends Component {
  state = {
    ownerName: '',
  }

  componentDidMount() {
    let id = this.props.match.params.id

    console.log('IN UNIQUE USER')

    Axios.get(`http://localhost:5000/api/users/${id}`)
      .then(response => {
        console.log(response)
        this.setState({
          ownerName: response.data.user[0].ownerName,
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <h1>Profile of {this.state.ownerName}</h1>
      </div>
    )
  }
}

export default UniqueUser
