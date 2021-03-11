import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class Timer extends Component {
  constructor () {
    super ()

    this.state = {
      session: true,
      sessionSeconds: 0,
      intervalTime: 0
    }
    this.startTimer = this.startTimer.bind(this)
    this.downTime = this.downTime.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.reloadTimer = this.reloadTimer.bind(this)
  }

  startTimer() {
    let intervalTime = setInterval(this.downTime, 1000)

    this.setState({
      intervalTime: intervalTime
    })
  }
  downTime() {
    switch (this.state.sessionSeconds) {
      case 0:
        if (this.props.sessionMinutes === 0) {
          if (this.state.session) {
            this.setState({
              session: false
            })
            this.props.onToggle(this.state.session)
          } else {
            this.setState({
              session: true
            })
            this.props.onToggle(this.state.session)
          }
        } else {
          this.props.onUpdateSessionMinutes()
          this.setState({
            sessionSeconds: 59
          })
        }
        break;
      default:
        this.setState(prevState => {
          return {
            sessionSeconds: prevState.sessionSeconds - 1
          }
        })
        break;
    }
  }
  stopTimer() {
    clearInterval(this.state.intervalTime)
  }
  reloadTimer() {
    this.stopTimer()
    this.props.onReloadTimer()
    this.setState({
      sessionSeconds: 0,
      session: true
    })
  }
  render() {
    return (
      <section className='session-card'>
          <h3>
            {this.state.session === true ? 'Session' : 'Break'}
          </h3>
        <div className='session-time'>
          <span>{this.props.sessionMinutes}</span>
          <span> : </span>
          <span>
            {this.state.sessionSeconds === 0 ? '00' :
            this.state.sessionSeconds < 10 ? '0' + this.state.sessionSeconds :
            this.state.sessionSeconds}
          </span>
        </div>
        <div>
        <Button onClick={this.startTimer}>Start</Button>
        <Button onClick={this.stopTimer}>Stop</Button>
        <Button onClick={this.reloadTimer}>Reload</Button>
        </div>
      </section>
    )
  }
}
