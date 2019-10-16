import React, { Component } from 'react'
import form from './images/form.png'
import search from './images/magnifyingglass.png'
import dogs from './images/doggroup.png'

class MiddleSection extends Component {
  render() {
    return (
      <div className="middle-section container-2">
        <h1 id='how-it-works' className="align-center">How it works</h1>
        <div className="row middle-row">
          <div className="col">
            <h2 className="align-center">Sign Up</h2>
            <div className="image-col">
              <p className="align-center">
                Sign up in less than 5 minutes using
                <br /> our interactive form
              </p>
              {/* <img className="middle-image-1" src={form} alt="formIcon" /> */}
            </div>
          </div>
          <div className="col">
            <h2 className="align-center">Search for your city</h2>
            <div className="image-col">
              <p className="align-center">
                Look through the results to find the one that best matches your
                pet's needs
              </p>
              {/* <img className="middle-image-2" src={search} alt="formIcon" /> */}
            </div>
          </div>
          <div className="col">
            <h2 className="align-center">Find a playdate!</h2>
            <div className="image-col">
              <p className="align-center">
                Once you find a playpal, send them an email
                <br /> and schedule a playdate!
              </p>
              {/* <img className="middle-image-3" src={dogs} alt="formIcon" /> */}
            </div>
          </div>
        </div>
      {/* Images section */}
        <div className="row">
          <div className="col">
            <div className="image-cont">
              <img className="middle-image-1" src={form} alt="formIcon" />
            </div>
          </div>

          <div className="col">
            <div className="image-cont">
              <img className="middle-image-2" src={search} alt="formIcon" />
            </div>
          </div>

          <div className="col">
            <div className="image-cont">
              <img className="middle-image-3" src={dogs} alt="formIcon" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MiddleSection
