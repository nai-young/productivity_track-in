import React, { Component } from 'react'
import '../../styles/app.css'
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
      <section className='card card-notes relative top-5  w-53  flex flex-col rounded-lg'>
        <h2>Notes</h2>
        <AddNote/>
        <ListNotes notes={notes}/>
      </section>
    )
  }
}

export default Notes