const mongoose = require('mongoose')
require('dotenv').config()

const db = process.env.MONGODB_URL

const connectDB = async () => {
  try {
    await mongoose.connect(db,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
    )
    console.log('MongoDB Connected')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB
