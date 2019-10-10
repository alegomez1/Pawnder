const express = require('express')
const User = require('../models/User')

const router = express.Router()

router.get('/:city', (req,res,next) => {
  User.find({city: `${req.params.city}`})
  .then(miamiUsers=>{
    res.json(miamiUsers)
  })
  .catch(err=>next(err))
})

module.exports = router