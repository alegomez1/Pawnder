import React, { Component } from 'react'
import api from '../api'
import ImageCarousel from './ImageCarousel';
import CoverImage from './CoverImage';

export default class Home extends Component {
  render() {

    return (
      <div className="Home">
      <CoverImage/>
        {/* <div className="carousel-div">
        <ImageCarousel />
        </div> */}
      </div>
    )
  }
}
