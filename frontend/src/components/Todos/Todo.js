import React, { Component } from 'react'
import axios from 'axios'

import AddTodo from './AddTodo'
import TodoList from './TodoList'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }
  componentDidMount() {
      this.getTodo()
  }
  getTodo = () => {
    axios.get('/todos/')
        .then(res => {
          this.setState({ todos: res.data })
        })
        .catch(error => console.error('Server error: ' + error.message))
  }
  removeTodo = (todoId) => {
    axios.delete(`/todos/${todoId}`)
      .then(res => {
        if(res.data) {
          this.getTodo()
        }
      })
      .catch(error => console.error('Server error: ' + error.message))
  }
  render () {
    let { todos } = this.state
    return (
      <section className="card-todo">
        <h2>To-Do</h2>
        <section>
          <AddTodo/>
          <TodoList todos={ todos } removeTodo={ this.removeTodo }/>
        </section>
      </section>
    )
  }
}

export default Todo