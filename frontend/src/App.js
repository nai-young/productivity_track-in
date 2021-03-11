import './styles/app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

import Todo from './components/Todos/Todo'
import AddTodo from './components/Todos/AddTodo'
import EditTodo from './components/Todos/EditTodo'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Pomodoro from './components/Pomodoro/Pomodoro'
import Notes from './components/Notes/Notes'

function App() {
  return (
    <Router>
      <Header/>
      <Sidebar/>
      <div className='App'>
        <Card className='card-pomodoro'>
          <h2>Pomodoro Timer</h2>
          <Pomodoro />
        </Card>
        <Card className="card-todo">
          <Card.Body>
            <h2>To-do</h2>
            <Card.Text>
              <Route exact path="/" component={AddTodo}/>
              <Route exact path="/" component={Todo}/>
              <Route exact path="/todoedit/:id" component={EditTodo}/>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='card-notes'>
          <h2>Notes</h2>
          <Notes />
        </Card> 
      </div>
    </Router>
  )
}

export default App;
