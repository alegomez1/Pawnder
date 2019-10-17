import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CoverImage extends Component {
  render() {
    
    return (
      <div className="cover-image">
        <div className="cover-image-content">
          <h1 className="cover-image-header">Pawnder</h1>
          <h3 className="cover-image-subtext">
            Find the perfect play pal for your dog
          </h3>
          <div className="cover-image-button-div">
            <Link className="testlink" to="/signup">
              <button className="cover-image-button">Get started</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default CoverImage
