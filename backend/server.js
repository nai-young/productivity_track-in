const express = require('express')
const todoRouter = require('./routes/todo')
const noteRouter = require('./routes/note')
const app = express()
const cors = require('cors')
const connectDB = require('./db')

require('dotenv').config()

app.use(cors())
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header(
    'Access-Control-Allow-Origin',
    'http://clientscrud.herokuapp.com'
  )
  next()
})

app.use('/todos/', todoRouter)
app.use('/notes/', noteRouter)

// Database connection
connectDB()

// Server connection
const port = 5000
app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
