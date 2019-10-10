import React, { Component } from 'react'
import axios from 'axios'

class Search extends Component {
  state={
    ownerName: '',
    search: 'Miami'
  }

  // axios.get('')

  render () {

    return (
      <div>
        <input type='text' placeholder="Search city"></input>

        <div>
          <h2>Owner info: </h2>
        </div>
      </div>
    )
  }
}

export default Search