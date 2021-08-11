const express = require('express')
const todoRouter = require('./routes/todo')
const noteRouter = require('./routes/note')
const app = express()
const cors = require('cors')
const connectDB = require('./db')
const path = require('path')

require('dotenv').config()

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '..', '/frontend/build')))
  // Handle React routing, return all requests to React app
  /* app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '..', '/client/build', 'index.html'));
  }); */
}

// app.use(cors())
// parse requests of content-type - application/json
// app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: false }))

/* app.use((req, res, next) => {
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
}) */

app.use('/todos/', todoRouter)
app.use('/notes/', noteRouter)

// Database connection
connectDB()

// Server connection
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
