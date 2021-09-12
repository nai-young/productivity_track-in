import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EditNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }
  }
  componentDidMount() {
    axios.get(`/notes/${this.props.match.params.note_id}`)
      .then(res => {
        this.setState({
          title: res.data.title,
          description: res.data.description
        })
      })
  }
  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  onChangeDesc = (e) => {
    this.setState({
      description: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const note = {
      title: this.state.title,
      description: this.state.description
    }

    axios.put(`/notes/noteedit/${this.props.match.params.note_id}`, note)
      .then(res => {
        console.log('Note updated: ', res.data)
      })
      .catch(error => console.error('Server error: ' + error.message))
    window.location = `/notes/${this.props.match.params.note_id}`
  }
  
  render() {
    return (
      <>
        <h1>Edit Note</h1>
        <form onSubmit={this.handleSubmit} className="w-1/2 m-auto h-70 flex flex-col justify-between align-middle">
          <div className="flex flex-col w-full h-full gap-1">
            <label for="title">Title</label>
            <input type="text"
              required
              value={this.state.title}
              id="title"
              onChange={this.onChangeTitle}
              className="text-gray-700 p-2 w-full h-10  px-3 rounded-md placeholder-gray-500 border border-gray-200"
            />
            <label for="description">Description</label>
            <textarea 
              type="textarea"
              required value={this.state.description}
              id="description"
              onChange={this.onChangeDesc}
              className="h-2/4 text-gray-700 text-left flex-wrap p-3 rounded-md border border-gray-200"
            />
          </div>
          <div className="flex flex-row w-full gap-2">
            <button type="submit" 
              className='w-1/2 h-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-1.5 border-b-4 border-blue-700 hover:border-blue-500 rounded'
            >
              Save
            </button>
            <Link
              to={`/notes/${this.props.match.params.note_id}`}
              className=' w-1/2 h-10 text-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-1.5 border-b-4 border-blue-700 hover:border-blue-500 rounded'
            >Back</Link>
          </div>
        </form>
      </>
    )
  }
}
