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
      <div className="w-1/2 p-2 m-auto h-70 flex flex-col justify-between">
        <div className="w-full flex flex-col gap-5">
          <p className="text-xl">{note.title}</p>
          <p className="text-lg">{note.description}</p>
        </div>
        <div className="flex flex-row gap-2">
          <button
            className="w-1/2 h-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-1.5 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          ><Link to={`/notes/noteedit/${this.props.match.params.note_id}`}>Edit Note</Link></button>
          <button
            onClick={this.deleteNote}
            className="w-1/2 h-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-1.5 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >Delete Note</button>
          <button
            className="w-1/2 h-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-1.5 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          ><Link to={'/'}>Home</Link></button>
        </div>
      </div>
    )
  }
}