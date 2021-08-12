import React from 'react'

const ListNotes = ({ notes }) => {
  return(
    <ul>
      {notes.map(note => {
        return <li key={note._id}>{note.title} | {note.description}</li>
      })}
    </ul>
  )
}

export default ListNotes