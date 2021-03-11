import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const TodoList = ({todos, removeTodo }) => {
  return (
    <ListGroup>
      {todos && todos.length > 0 ? (
        todos.map(todo => {
          return (
            <div className="todo-container">
              <ListGroup.Item key={todo._id} onClick={() => removeTodo(todo._id)} className="todo-item">
                {todo.title} | {todo.priority}
              </ListGroup.Item>
              <Link to={'/todoedit/' + todo._id }><Button>Edit</Button></Link>
            </div>
          )
        }) 
      ) : (<li>No todo(s) left</li>)
      } 
    </ListGroup>
  )
}
export default TodoList