import React, { Component } from 'react'
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons'

class Sidebar extends Component {
  render () {
    return (
      <div className='sidebar'>
        <ul>
          <li><FontAwesomeIcon icon={faTachometerAlt} className="icon-sidebar"/></li>
          <li><FontAwesomeIcon icon={faCalendarAlt} className="icon-sidebar"/></li>
          <li><FontAwesomeIcon icon={faClock} className="icon-sidebar"/></li>
          <li><FontAwesomeIcon icon={faCoffee} className="icon-sidebar"/></li>
          <li><FontAwesomeIcon icon={faEnvelope} className="icon-sidebar"/></li>
        </ul>
      </div>
    )
  }
}

export default Sidebar