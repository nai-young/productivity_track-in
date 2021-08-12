import React from 'react'
import { Link } from "react-router-dom"

const ListNotes = ({ notes }) => {
  return(
    <ul>
      {notes && notes.length > 0 ? (
        notes.map(note => {
          return (
            <li key={note._id}>
              <Link to={`/notes/${note._id}`}>{note.title}</Link>
              {/* TODO - Add remove todo component */}
            </li>
          )
      })
      ) : (<p>No note(s) left</p>)
    }
    </ul>
  )
}

export default ListNotes