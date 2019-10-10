import React, { Component } from 'react'
import Axios from 'axios'

class UniqueUser extends Component {
  componentDidMount() {
    console.log('In unique user page')
    // console.log('PROPS=====', this.props)
    let id = this.props.match.params.id

    Axios.get(`http://localhost:5000/api/users/${id}`)
      .then(response => {
        console.log(response)
        console.log(response.data._id)
      })
      .catch(err => console.log(err))
  }
  render() {
    return <div></div>
  }
}

export default UniqueUser





