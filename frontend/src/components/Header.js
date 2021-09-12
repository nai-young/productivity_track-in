import React, { Component } from 'react'
import '../styles/app.css';
import logo from '../images/logo.png'

class Header extends Component {
  render () {
    return (
      <div className="header-container">
          <img src={logo} alt="Productivity App" width="50px"/>
          <h1>Track-In</h1>
      </div>
    )
  }
}

export default Header