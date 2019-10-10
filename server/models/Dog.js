const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dogSchema = new Schema(
  {
    dogName: String,
    dogImage: String,
    dogBio: String,
    dogActivities: String,
    dogAge: String,
    ownerID: Schema.Types.ObjectId
  }
)

const Dog = mongoose.model('Dog', dogSchema)
module.exports = Dog
