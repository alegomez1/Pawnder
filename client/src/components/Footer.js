import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="footer-section center-stuff">
        <div className="row footer-row">
        
        <div className="col-4">
          <a href='#'>
           <i className="fas fa-info fa-2x faIcons"></i>
          </a>
          </div>

          <div className="col-4">
            <a href="https://github.com/alegomez1">
            <i className="fab fa-github fa-2x faIcons"></i>
{/* <i className="fab fa-github-square fa-2x faIcons"></i> */}
            </a>
          </div>

          <div className="col-4">
            <a href="https://linkedin.com/in/alegomez1996">
              {/* <i className="fab fa-linkedin fa-2x faIcons"></i> */}
              <i className="fab fa-linkedin-in fa-2x faIcons"></i>
            </a>
          </div>
          </div>

      </div>
    )
  }
}

export default Footer
