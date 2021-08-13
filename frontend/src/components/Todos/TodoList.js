import React from 'react'
// import '../../styles/todos.css'
// import '../../styles/app.css'
import { Link } from 'react-router-dom'
// import ListGroup from 'react-bootstrap/ListGroup'
// import Button from 'react-bootstrap/Button'

const TodoList = ({todos, removeTodo }) => {
  return (
    <ul>
      {todos && todos.length > 0 ? (
        todos.map(todo => {
          return (
            <div key={todo._id} className="todo-container flex w-full justify-between py-1">
              <li onClick={() => removeTodo(todo._id)} className="todo-item w-88 hover:line-through cursor-pointer border border-gray-200 bg-gray-100 rounded-lg p-2 self-center">
                {todo.title} | {todo.priority}
              </li>
              <Link to={'/todoedit/' + todo._id } className='w-11'>
                <button type="button" className='bg-blue-500 w-full hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Edit</button>
              </Link>
            </div>
          )
        }) 
      ) : (<p>No todo(s) left</p>)
      } 
    </ul>
  )
}
export default TodoList