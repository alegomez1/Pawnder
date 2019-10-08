import React, { Component } from 'react'
import api from '../api'

export default class Home extends Component {

  state={
    user: ''
  }
  async componentDidMount(){  
  let current = await api.getLocalStorageUser()
  this.setState({
    user:current.username
  })
  }
  render() {

    
    return (
      <div className="Home">
        <h2>Welcome to Pawnder! {this.state.user}</h2>
      </div>
    )
  }
}