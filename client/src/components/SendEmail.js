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
      <div className="mail">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="subject"
            onChange={this.handleChange}
            name="subject"
          />
          <br />
          <input
            type="text"
            placeholder="email"
            onChange={this.handleChange}
            name="email"
          />
          <br />

          <input
            type="textarea"
            placeholder="message"
            onChange={this.handleChange}
            name="message"
          />
          <br />
          <button>Send e-mail</button>
        </form>
      </div>
    )
  }
}

export default SendEmail
