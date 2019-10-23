const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: String,
    ownerName: String,
    ownerImage: String,
    ownerBio: String,
    ownerAge: String,
    city: String,
    password: String,
    dogName: String,
    dogImage: String,
    dogBio: String,
    dogAge: String,
    dogSize: String,
    dogActivityLevel: Number,
    level: String,
    posts: Array,
    dogBreed: String,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
)

const User = mongoose.model('User', userSchema)
module.exports = User
