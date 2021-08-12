const express = require('express')
const router = express.Router()
const Note = require('../models/Note')

router.get('/', async (req, res) => {
  const notes = await Note.find({})
  res.json(notes)
})

router.post('/', async (req, res) => {
  try {
    const note = new Note({
      title: req.body.title,
      description: req.body.description
    })
    await note.save()
    res.json(note)
  } catch (err) {
    res.status(500).send('Server error: ' + err.message)
  }
})

// TODO - Add update notes

// TODO - Add remove notes

module.exports = router
