import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class EditTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      priority: ''
    }

  }
  componentDidMount() {
    axios.get('/todos/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          title: res.data.title,
          priority: res.data.priority
        })
      })
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
      priority: this.state.priority
    }

    axios.put('/todos/edit/' + this.props.match.params.id, todo)
      .then(res => {
        console.log('Todo updated: ' + res.data)
      })
      .catch(error => console.error('Server error: ' + error.message))

      window.location = '/'
  }

  render () {
    return (
      <div>
        <h2>Edit Todo</h2>
        <form onSubmit={this.handleSubmit}>
          <Form.Control type="text" required value={this.state.title} onChange={this.onChangeTitle} />
          <Form.Control as='select' value={this.state.priority} onChange={this.onChangePriority}>
            <option>Select...</option>
            <option>Low</option>
            <option>Medium</option>
            <option>Urgent</option>
          </Form.Control>
          <div className="form-group">
            <Button type="submit">Save</Button>
          </div>
        </form>
        <Link to={'/'}><Button>Cancel</Button></Link>
      </div>
    )
  }
}
 export default EditTodo