const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dogSchema = new Schema(
  {
    dogName: String,
    dogImage: String,
    dogBio: String,
    dogActivities: String,
    dogAge: String,
  }
)

const User = mongoose.model('Dog', dogSchema)
module.exports = Dog
