import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DisplayNote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: ''
    }
  }
  componentDidMount() {
    axios.get('/notes/' + this.props.match.params.note_id)
    .then(res => {
      this.setState({
        title: res.data.title,
        description: res.data.description
      })
    })
    .catch(err => console.error(err.message))
  }
  deleteNote = () => {
    axios.delete(`/notes/${this.props.match.params.note_id}`)
      .then(
        console.log('Note deleted')
      )
      .catch(err => console.error(err.message))
    window.location = "/"
  }
  render() {
    const note = {
      title: this.state.title,
      description: this.state.description
    } 
    return (
      <div>
        <h1>Note</h1>
        <p>Title: {note.title}</p>
        <p>Description: {note.description}</p>
        <button><Link to={`/notes/noteedit/${this.props.match.params.note_id}`}>Edit Note</Link></button>
        <button onClick={this.deleteNote}>Delete Note</button>
        <button><Link to={'/'}>Home</Link></button>
      </div>
    )
  }
}