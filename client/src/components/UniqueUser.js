import React, { Component } from 'react'
import Axios from 'axios'

class UniqueUser extends Component {
  state={
    user: ''
  }

  componentDidMount() {

    let id = this.props.match.params.id

    Axios.get(`http://localhost:5000/api/users/${id}`)
      .then(response => {
        console.log(response)
        this.setState({
          user: response.data[0].ownerName
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return <div>
      <h1>Profile of {this.state.user}</h1>
    </div>
  }
}

export default UniqueUser





