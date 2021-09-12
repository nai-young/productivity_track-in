import React from 'react'
import { Link } from "react-router-dom"

const ListNotes = ({ notes }) => {
  return(
    <ul>
      {notes && notes.length > 0 ? (
        notes.map(note => {
          return (
            <li key={note._id} className="w-full hover:underline cursor-pointer my-2 p-2 self-center text-gray-100">
              ■ <Link to={`/notes/${note._id}`}>{note.title}</Link>
            </li>
          )
      })
      ) : (<p>No note(s) left</p>)
    }
    </ul>
  )
}

export default ListNotes