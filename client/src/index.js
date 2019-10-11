import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import AddPet from './components/AddPet'
import axios from 'axios'
axios.defaults.withCredentials = false
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <AddPet />
  </Router>,
  document.getElementById('root')
)
// registerServiceWorker();
