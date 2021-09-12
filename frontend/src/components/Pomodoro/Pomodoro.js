import React, { Component } from 'react'
import '../../styles/app.css'

import BreakTime from './BreakTime'
import DurationTime from './DurationTime'
import Timer from './Timer'

class Pomodoro extends Component {
  constructor () {
    super()
    this.state = {
      breakTime: 5,
      durationTime: 25,
      sessionMinutes: 25
    }
    this.onUpBreak = this.onUpBreak.bind(this)
    this.onDownBreak = this.onDownBreak.bind(this)
    this.onUpDuration = this.onUpDuration.bind(this)
    this.onDownDuration = this.onDownDuration.bind(this)
    this.onUpdateSessionMinutes = this.onUpdateSessionMinutes.bind(this)
    this.onToggle = this.onToggle.bind(this)
    this.onReloadTimer = this.onReloadTimer.bind(this)
  }

  onUpBreak() {
    this.setState(prevState => {
      return {
        breakTime: prevState.breakTime + 1
      }
    })
  }
  onDownBreak() {
    this.setState(prevState => {
      return {
        breakTime: prevState.breakTime - 1
      }
    })
  }
  onUpDuration() {
    this.setState(prevState => {
      return {
        durationTime: prevState.durationTime + 1,
        sessionMinutes: prevState.durationTime + 1
      }
    })
  }
  onDownDuration() {
    this.setState(prevState => {
      return {
        durationTime: prevState.durationTime - 1,
        sessionMinutes: prevState.durationTime - 1
      }
    })
  }
  onUpdateSessionMinutes() {
    this.setState(prevState => {
      return {
        sessionMinutes: prevState.sessionMinutes - 1
      }
    })
  }
  onToggle(session) {
    if(session) {
      this.setState({
        sessionMinutes: this.state.durationTime
      })
    } else {
      this.setState({
        sessionMinutes: this.state.breakTime
      })
    }
  }
  onReloadTimer() {
    this.setState({
      sessionMinutes: this.state.durationTime
    })
  }

  render () {
    return (
      <section className='card card-pomodoro relative float-left flex flex-col rounded-lg w-53'>
        <h2>Pomodoro Timer</h2>
        <section className='pomodoro-timer flex justify-between h-full'>
          <DurationTime durationTime={this.state.durationTime} onUpDuration={this.onUpDuration} onDownDuration={this.onDownDuration}/>
          <Timer
            sessionMinutes={this.state.sessionMinutes}
            breakTime={this.state.breakTime}
            onUpdateSessionMinutes={this.onUpdateSessionMinutes}
            onToggle={this.onToggle}
            onReloadTimer={this.onReloadTimer}
          />
          <BreakTime breakTime={this.state.breakTime} onUpBreak={this.onUpBreak} onDownBreak={this.onDownBreak}/>
        </section>
      </section>
    )
  }
}

export default Pomodoro