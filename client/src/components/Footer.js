import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="footer-section center-stuff">
        <div className="row">

          <div className="col-4">
            <p>Technologies used</p>
          </div>
          <div className="col-4">
            <a href="https://github.com/alegomez1">
              <i className="fab fa-github-square fa-3x faIcons"></i>
            </a>
          </div>
          <div className="col-4">
            <a href="https://linkedin.com/in/alegomez1996">
              <i className="fab fa-linkedin fa-3x faIcons"></i>
            </a>
          </div>
          </div>

      </div>
    )
  }
}

export default Footer
