import axios from 'axios'
import React, { Component } from 'react'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'

class AddTodo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      priority: '',
    }
  }
  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  onChangePriority = (e) => {
    this.setState({
      priority: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const todo = {
      title: this.state.title,
      priority: this.state.priority,
      completed: this.state.completed
    }
    axios.post('/todos/', todo)
      .then(res => {
        console.log('Todo created:' + res.data)
      })
      .catch(error => console.error('Server error: ' + error.message))

      window.location = '/'
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit} className="todos-container mt-3 mb-3 flex justify-between">
        <input type="text" className='w-1/2 px-3' required value={this.state.title} onChange={this.onChangeTitle}/>
        <select className='w-30 px-3' value={this.state.priority} onChange={this.onChangePriority}>
          <option>Select...</option>
          <option>Low</option>
          <option>Medium</option>
          <option>Urgent</option>
        </select>
        <button type="submit" className='w-1/6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-1.5 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Add Todo</button>
      </form>
    )
  }
}

export default AddTodo

