import React, { Component } from 'react'
import api from '../api'

export default class Home extends Component {

  state={
    user: '',
    userImage: '',
    petName: '',
    petImage: '',

  }
  async componentDidMount(){  
  let current = await api.getLocalStorageUser()
  if(current != null){
    this.setState({
      user:current.username
    })
  }
  }
  render() {
    return (
      <div className="Home">
        <h2>Welcome to Pawnder! {this.state.user}</h2>
      </div>
    )
  }
}