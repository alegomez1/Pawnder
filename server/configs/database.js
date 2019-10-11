const mongoose = require('mongoose')

// Don't forget to set "MONGODB_URI" in ~/server/.env
const uri =
  `mongodb+srv://alex:alex@cluster0-ci3y7.mongodb.net/test?retryWrites=true&w=majority` ||
  `mongodb://localhost/Pawnder`

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })
