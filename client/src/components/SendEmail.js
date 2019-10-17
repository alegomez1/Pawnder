import React, { Component } from 'react'
import axios from 'axios'

class SendEmail extends Component {
  constructor() {
    super()
    this.state = {
      subject: '',
      email: '',
      message: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log('current state', this.state)
  }

  async handleSubmit(e){
    e.preventDefault()

    const data = {
      subject:this.state.subject,
      email: this.state.email,
      message: this.state.message
    } 

    const form = await axios.post('/api/form', {

      subject:this.state.subject,
      email: this.state.email,
      message: this.state.message
    })
  }

  render() {
    return (
      <div className="mail-div align-center">
        <form onSubmit={this.handleSubmit}>
          <input
            id='subject-field'
            type="text"
            placeholder="subject"
            onChange={this.handleChange}
            name="subject"
          />
          <br />
          <input
          id='your-email-field'
            type="text"
            placeholder="your e-mail"
            onChange={this.handleChange}
            name="email"
          />
          <br />

          <textarea
          id='message-field'
            type="textarea"
            placeholder="message"
            onChange={this.handleChange}
            name="message"
          />
          <br />
          <button className='email-button'>Send e-mail</button>
        </form>
      </div>
    )
  }
}

export default SendEmail
