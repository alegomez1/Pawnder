const express = require('express')
const User = require('../models/User')
const Dog = require('../models/Dog')

const router = express.Router()

// Route to get all users
router.get('/', async (req, res, next) => {
  // User.find()
  //   .then(users => {
  //     res.json(users)
  //   })
  //   .catch(err => next(err))

    //To get both user and dog info
    let dog = await Dog.find().catch(err =>
      console.error(err)
    )
    let user = await User.find().catch(err =>
      console.error(err)
    )
  
    res.json({ dog, user })

})

// router.get('/:city', (req,res,next) => {
//   User.find({city: `${req.params.city}`})
//   .then(miamiUsers=>{
//     res.json(miamiUsers)
//   })
//   .catch(err=>next(err))
// })

router.get('/:id', async (req, res, next) => {
  console.log('PARAMS===', req.params)

  let dog = await Dog.find({ ownerID: `${req.params.id}` }).catch(err =>
    console.error(err)
  )
  let user = await User.find({ _id: `${req.params.id}` }).catch(err =>
    console.error(err)
  )

  res.json({ dog, user })

  //   .then(singleUser => {
  //     res.json(singleUser)
  //   })
  //   .catch(err => next(err))
})

// Route to add a country
// router.post('/', (req, res, next) => {
//   let { name, capitals, area, description } = req.body
//   Country.create({ name, capitals, area, description })
//     .then(country => {
//       res.json({
//         success: true,
//         country,
//       })
//     })
//     .catch(err => next(err))
// })

module.exports = router
