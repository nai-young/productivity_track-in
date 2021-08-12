import React from 'react'
import '../../styles/todos.css'
import '../../styles/app.css'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const TodoList = ({todos, removeTodo }) => {
  return (
    <ListGroup>
      {todos && todos.length > 0 ? (
        todos.map(todo => {
          return (
            <div key={todo._id} className="todo-container">
              <ListGroup.Item onClick={() => removeTodo(todo._id)} className="todo-item">
                {todo.title} | {todo.priority}
              </ListGroup.Item>
              <Link to={'/edit/' + todo._id }><Button>Edit</Button></Link>
            </div>
          )
        }) 
      ) : (<p>No todo(s) left</p>)
      } 
    </ListGroup>
  )
}
export default TodoList