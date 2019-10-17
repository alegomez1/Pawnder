const express = require('express')
const User = require('../models/User')
const Dog = require('../models/Dog')

const router = express.Router()

// Route to get all users
router.get('/', async (req, res, next) => {


    //To get both user and dog info
    let dog = await Dog.find().catch(err =>
      console.error(err)
    )
    let user = await User.find().catch(err =>
      console.error(err)
    )
    res.json({ user })
})

router.get('/:id', async (req, res, next) => {
  console.log('PARAMS===', req.params)
 user = await User.find({ _id: `${req.params.id}` }).catch(err =>
    console.error(err)
  )
  res.json({ user })
})

router.get('/:id/posts', async (req, res, next) => {
  console.log('PARAMS===', req.params)
 user = await User.find({ _id: `${req.params.id}` }).catch(err =>
    console.error(err)
  )
  res.json({ user })
})

router.post('/:id/posts', async (req,res,next)=>{
  console.log('------POST ROUTE CALLED-------')
  user = await User.find({ _id: `${req.params.id}` }).catch(err =>
    console.error(err)
  )

})

module.exports = router
