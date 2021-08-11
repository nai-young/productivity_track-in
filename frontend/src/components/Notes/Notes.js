import React, { Component } from 'react'
import '../../styles/notes.css'
import '../../styles/app.css'
import AddNote from './AddNote'

class Notes extends Component {
  render () {
    return (
      <section className='card-notes'>
        <h2>Notes</h2>
        <AddNote/>
      </section>
    )
  }
}

export default Notes