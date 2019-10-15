const express = require('express')



const router = express.Router()

router.get('/all', (req, res, next) => {
  console.log('----------These are all the dogs')
  Dog.find()
    .then(dogs => {
      res.json(dogs)
    })
    .catch(err => next(err))
})



module.exports = router