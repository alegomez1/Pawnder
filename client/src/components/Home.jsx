import React, { Component } from 'react'

import CoverImage from './CoverImage'
import MiddleSection from './MiddleSection'
import Footer from './Footer'

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <CoverImage {...this.props} />
        <MiddleSection />
        <Footer/>
      </div>
    )
  }
}
