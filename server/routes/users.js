const express = require('express')
const User = require('../models/User')
const Dog = require('../models/Dog')

const router = express.Router()

// Route to get all users
router.get('/', async (req, res, next) => {
  //To get both user and dog info
  let dog = await Dog.find().catch(err => console.error(err))
  let user = await User.find().catch(err => console.error(err))
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

router.post('/:id/addPost', (req, res, next) => {
  console.log('REQ.BODY', req.body)
  let newPost = req.body.currentPost
  const today = new Date()
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  console.log(newPost)
  console.log('------POST ROUTE CALLED-------')
  User.findByIdAndUpdate({_id: req.params.id}, {$push:{posts: newPost+' '+date}})
    .then(
      results => {
        console.log('RESULTS-=-=-=-=-=-=-', results)
        // results.posts.push(newPost)
        // console.log('NEW POST ARRAY-=-=-=-=-=-=-', results.posts)
        // router.save(function(err){
        //   console.log(err)
        // })
        res.json(results)
      })

    //   // console.log('found-----', user[0].posts),
    //   // user[0].posts.push('TESTING'),
    //   // console.log('NEW POST-----', user[0].posts),
    // )
    // .catch(err => console.error(err))
})

module.exports = router
