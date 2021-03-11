import axios from 'axios'
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

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
      <form onSubmit={this.handleSubmit} className="todos-container">
        <Form.Control type="text" required value={this.state.title} onChange={this.onChangeTitle}/>
        <Form.Control as='select' custom value={this.state.priority} onChange={this.onChangePriority}>
          <option>Select...</option>
          <option>Urgent</option>
          <option>Medium</option>
        </Form.Control>
        <Button type="submit" variant='primary'>Add Todo</Button>
      </form>
    )
  }
}

export default AddTodo

