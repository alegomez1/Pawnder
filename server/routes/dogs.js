const express = require('express')
const Dog = require('../models/Dog')


const router = express.Router()//Router to get dogs

router.get('/', (req, res, next) => {
  Dog.find()
    .then(dogs => {
      res.json(dogs)
    })
    .catch(err => next(err))
})

module.exports = router