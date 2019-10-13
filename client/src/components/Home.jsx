import React, { Component } from 'react'
import api from '../api'
import ImageCarousel from './ImageCarousel';

export default class Home extends Component {
  render() {

    return (
      <div className="Home">
        {/* <h2>Welcome to Pawnder! {this.props.user.username}</h2> */}
        <ImageCarousel/>
      </div>
    )
  }
}
