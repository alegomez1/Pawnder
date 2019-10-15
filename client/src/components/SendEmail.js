import React, { Component } from 'react'

class SendEmail extends Component {
  render () {
    return (
      <div
      className='mail'>
        <h1>Send Email Page</h1>
        <input
        type='text'
        name='subject'
        placeholder='subject'
        />
        <br/>
        <input
          type='text'
          name='content'
          placeholder='content'
        />
        <br/>
        <button>Send</button>
      </div>
    )
  }
}

export default SendEmail