const express = require('express')
const User = require('../models/User')

const router = express.Router()

// Route to get all users
router.get('/', (req, res, next) => {
  User.find()
    .then(users => {
      res.json(users)
    })
    .catch(err => next(err))
})

// Route to add a country
router.post('/', (req, res, next) => {
  let { name, capitals, area, description } = req.body
  Country.create({ name, capitals, area, description })
    .then(country => {
      res.json({
        success: true,
        country,
      })
    })
    .catch(err => next(err))
})

module.exports = router