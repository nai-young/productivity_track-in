import React, { Component } from 'react'
// import Button from 'react-bootstrap/Button'

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
      <section className='session-card shadow-xl rounded-md self-center text-center p-2 min-w-30 h-sm flex justify-between flex-col align-center'>
          <h3>
            {this.state.session === true ? 'Session' : 'Break'}
          </h3>
        <div className='session-time bg-blue-100 p-1 rounded-full w-1/3 h-2/6 self-center flex justify-around items-center border-0.5 border-black rounded-md'>
          <span>
            {this.props.sessionMinutes}
          </span>
          <span> : </span>
          <span>
            {this.state.sessionSeconds === 0 ? '00' :
            this.state.sessionSeconds < 10 ? '0' + this.state.sessionSeconds :
            this.state.sessionSeconds}
          </span>
        </div>
        <div >
          <button onClick={this.startTimer} className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Start</button>
          <button onClick={this.stopTimer} className='ml-1 mr-1 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Stop</button>
          <button onClick={this.reloadTimer} className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Reload</button>
        </div>
      </section>
    )
  }
}
