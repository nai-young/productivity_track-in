import './styles/app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';

import Todo from './components/Todos/Todo'
import EditTodo from './components/Todos/EditTodo'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Pomodoro from './components/Pomodoro/Pomodoro'
import Notes from './components/Notes/Notes'
import Calendar from './components/Calendar/Calendar'
import Tracker from './components/Tracker/Tracker'
import DisplayNote from './components/Notes/DisplayNote'
import EditNote from './components/Notes/EditNote'

function App() {
  return (
    <Router>
      <Header/>
      <Sidebar/>
      <div className='m-0 w-screen h-95 pl-20 pt-6 pr-8 bg-gray-200'>
        <Route exact path="/" component={Pomodoro}/>
        <Route exact path="/" component={Todo}/>
        <Route exact path="/todoedit/:todo_id" component={EditTodo}/>
        <Route exact path="/" component={Notes}/>
        <Route exact path="/notes/:note_id" component={DisplayNote}/>
        <Route exact path="/notes/noteedit/:note_id" component={EditNote}/>
        <Route path="/calendar" component={Calendar}/>
        <Route path="/tracker" component={Tracker}/>
      </div>
    </Router>
  )
}

export default App;
