const express = require('express')
const todoRouter = require('./routes/todo')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

app.use(cors())
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Origin",
    "http://clientscrud.herokuapp.com"
  );
  next();
});

app.use('/todos/', todoRouter)

// Database connection
const dbUrl = process.env.MONGODB_URL
mongoose.connect('mongodb+srv://admin:mongopass@cluster0.y0mul.mongodb.net/productivity_track-in?retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true 
}).then(() => {
  console.log('Connected to database')
})

//Server connection
const port = 5000
app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})