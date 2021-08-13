import React, { Component } from 'react'
// import '../../styles/notes.css'
// import '../../styles/app.css'
import AddNote from './AddNote'
import ListNotes from './ListNotes'
import axios from 'axios'
class Notes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
  }
  componentDidMount() {
    this.getNotes()
  }
  getNotes = () => {
    axios.get('/notes/')
      .then(res => {
        this.setState({ notes: res.data })
      })
      .catch(error => console.error(error.message))
  }
  render () {
    let { notes } = this.state
    return (
      <section className='card-notes absolute bottom-6 min-w-48 h-2/5 bg-gray-50 flex flex-col rounded-lg shadow-lg'>
        <h2>Notes</h2>
        <AddNote/>
        <ListNotes notes={notes}/>
      </section>
    )
  }
}

export default Notes