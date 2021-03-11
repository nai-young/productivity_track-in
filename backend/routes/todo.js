const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo')

router.get('/', async (req, res) => {
  const todos = await Todo.find()
  res.json(todos)
})
router.get('/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id)
  if (!todo) {
    return res.status(404).send('Todo not found')
  }
  res.json(todo)
})
router.post('/', async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
      priority: req.body.priority,
    })
    await todo.save()
    res.send(todo)
  } catch (error) {
    res.status(500).send('Server error: ' + error.message)
  }
})
router.put('/todoedit/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)
    if(!todo) {
      return res.status(404).send('Todo not found')
    }
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    const updatedTodo = await Todo.findById(req.params.id)
    res.json(updatedTodo)
  } catch (error) {
    res.status(500).send('Server error: ' + error.message)
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)
    if(!todo) {
      return res.status(404).send('Todo not found')
    }
    await todo.delete()
    res.send('Todo deleted')
  } catch (error) {
    res.status(500).send('Server error: ' + error.message)
  }
})

module.exports = router