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

router.get('/:id', (req, res, next) => {
  Dog.findById(req.params._id)
    .then(dogs => {
      res.json(dogs)
    })
    .catch(err => next(err))
})

module.exports = router