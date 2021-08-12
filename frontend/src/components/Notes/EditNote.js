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
        <form onSubmit={this.handleSubmit}>
          <label for="title">Title</label>
          <input type="text" required value={this.state.title} id="title" onChange={this.onChangeTitle}/>
          <label for="description">Description</label>
          <input type="textarea" required value={this.state.description} id="description" onChange={this.onChangeDesc}/>
          <button type="submit">Save</button>
          <Link to={`/notes/${this.props.match.params.note_id}`}>Back</Link>
        </form>
      </>
    )
  }
}
