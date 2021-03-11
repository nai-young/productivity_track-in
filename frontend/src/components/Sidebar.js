import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/app.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons'

class Sidebar extends Component {
  render () {
    return (
      <div className='sidebar'>
        <ul>
          <li><Link to='/'><FontAwesomeIcon icon={faTachometerAlt} className="icon-sidebar"/></Link></li>
          <li><Link to='/calendar'><FontAwesomeIcon icon={faCalendarAlt} className="icon-sidebar"/></Link></li>
          <li><Link to='/tracker'><FontAwesomeIcon icon={faClock} className="icon-sidebar"/></Link></li>
          <li><Link to='/support'><FontAwesomeIcon icon={faCoffee} className="icon-sidebar"/></Link></li>
          <li><Link to='/contact'><FontAwesomeIcon icon={faEnvelope} className="icon-sidebar"/></Link></li>
        </ul>
      </div>
    )
  }
}

export default Sidebar