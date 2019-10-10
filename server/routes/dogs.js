const express = require('express')
const Dog = require('../models/Dog')


const router = express.Router()//Router to get dogs
//Gets all dogs
router.get('/all', (req, res, next) => {
  console.log('----------These are all the dogs')
  Dog.find()
    .then(dogs => {
      res.json(dogs)
    })
    .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
  console.log('FINDING A DOG')
  console.log("USER INFO=======", req.user._id)
  Dog.findOne({ownerID : `${req.params.id}`})
    .then(singleDOG => {
      res.json(singleDOG)
    })
    .catch(err => next(err))
})

module.exports = router