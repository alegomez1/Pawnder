import React, { Component } from 'react'

class Progress extends Component {
  render() {

    if(this.props.section === 1){
    return (
      <div className="progress-bar">
        <div className="row">
          <div className="col">
            <h5 className='selected'>Account Creation</h5>
          </div>
          <div className="col">
            <h5 className='not-selected'>Owner Info</h5>
          </div>
          <div className="col">
            <h5 className='not-selected'>Dog Info</h5>
          </div>
        </div>
      </div>
    )}

    else if(this.props.section === 2){
      return (
        <div className="progress-bar">
          <div className="row">
            <div className="col">
              <h5 className='not-selected'>Account Creation</h5>
            </div>
            <div className="col">
              <h5 className='selected'>Owner Info</h5>
            </div>
            <div className="col">
              <h5 className='not-selected'>Dog Info</h5>
            </div>
          </div>
        </div>
      )}

      if(this.props.section === 3){
        return (
          <div className="progress-bar">
            <div className="row">
              <div className="col">
                <h5 className='not-selected'>Account Creation</h5>
              </div>
              <div className="col">
                <h5 className='not-selected'>Owner Info</h5>
              </div>
              <div className="col">
                <h5 className='selected'>Dog Info</h5>
              </div>
            </div>
          </div>
        )}
  }
}

export default Progress
