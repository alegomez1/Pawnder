import React, { Component } from 'react'

export default class Home extends Component {

  state={
    user: 'Alex'
  }
  render() {
    return (
      <div className="Home">
        <h2>Welcome to Pawnder! {this.state.user}</h2>
      </div>
    )
  }
}