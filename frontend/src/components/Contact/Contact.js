import React, { Component } from 'react'
import '../../styles/app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'


export default class Contact extends Component {
  render() {
    return (
      <div className="p-2">
        <h1 className="text-xl">✨ Contact me</h1>
        <ul className="my-4">
          <li className="p-1"><FontAwesomeIcon icon={faHome} className="mr-1"/> Portfolio: <a href="https://naicheyoung.com">naicheyoung.com</a></li>
          <li className="p-1"><FontAwesomeIcon icon={faEnvelope} className="mr-1"/> Email: <a href="mailto:contact@naicheyoung.com">contact@naicheyoung.com</a></li>
          <li className="p-1"><FontAwesomeIcon icon={faLinkedinIn} className="mr-1"/> <a href="https://www.linkedin.com/in/naicheyoung/">Linkedin</a></li>
          <li className="p-1"><FontAwesomeIcon icon={faTwitter} className="mr-1"/> <a href="https://twitter.com/naiche_young">Twitter</a></li>
          <li className="p-1"><FontAwesomeIcon icon={faGithub} className="mr-1"/> <a href="https://github.com/nai-young">Github</a></li>
        </ul>
      </div>
    )
  }
}