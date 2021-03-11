import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class Timer extends Component {
  constructor () {
    super ()

    this.state = {
      session: true,
      sessionSeconds: 0
    }
  }
  render() {
    return (
      <section>
        <div>
          <h3>
            {this.state.session === true ? 'Session' : 'Break'}
          </h3>
          <span>{this.props.sessionMinutes}</span>
          <span> : </span>
          <span>
            {this.state.sessionSeconds === 0 ? '00' :
            this.state.sessionSeconds < 10 ? '0' + this.state.sessionSeconds :
            this.state.sessionSeconds}
          </span>
        </div>
        <div>
        <Button>Start</Button>
        <Button>Stop</Button>
        <Button>Reload</Button>
        </div>
      </section>
    )
  }
}
