import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
import '../../styles/app.css'

class EditTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      priority: ''
    }

  }
  componentDidMount() {
    axios.get('/todos/' + this.props.match.params.todo_id)
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

    axios.put('/todos/todoedit/' + this.props.match.params.todo_id, todo)
      .then(res => {
        console.log('Todo updated: ' + res.data)
      })
      .catch(error => console.error('Server error: ' + error.message))

      window.location = '/'
  }

  render () {
    return (
      <div className="h-screen">
        <h2>Edit Todo</h2>
        <form onSubmit={this.handleSubmit} className="h-2/5 w-7/12 gap-2 m-auto p-10 flex justify-between flex-column flex-wrap">
          <input 
            type="text"
            required
            value={this.state.title}
            onChange={this.onChangeTitle}
            className='p-2 w-2/3 h-10  px-3 rounded-md placeholder-gray-500 text-gray-700 border border-gray-200'
          />
          <select 
            value={this.state.priority}
            onChange={this.onChangePriority}
            className='p-2 h-10 w-1/4 px-3 rounded-md text-gray-700 border border-gray-200'
          >
            <option>Select...</option>
            <option>Low</option>
            <option>Medium</option>
            <option>Urgent</option>
          </select>
          <div className="form-group w-full gap-2 flex justify-center align-middle">
            <button
              type="submit"
              className='w-1/2 h-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-1.5 border-b-4 border-blue-700 hover:border-blue-500 rounded'
            >Save</button>
            <Link to={'/'} className="w-1/2 h-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-1.5 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              <button className="w-full">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    )
  }
}
 export default EditTodo