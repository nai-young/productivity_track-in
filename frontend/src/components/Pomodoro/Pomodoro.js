import React, { Component } from 'react'
import '../../styles/pomodoro.css'
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

  render () {
    return (
      <div className='pomodoro-timer'>
        <Timer sessionMinutes={this.state.sessionMinutes}/>
        <DurationTime durationTime={this.state.durationTime} onUpDuration={this.onUpDuration} onDownDuration={this.onDownDuration}/>
        <BreakTime breakTime={this.state.breakTime} onUpBreak={this.onUpBreak} onDownBreak={this.onDownBreak}/>
      </div>
    )
  }
}

export default Pomodoro