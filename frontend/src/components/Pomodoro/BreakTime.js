import React from 'react'
import Button from 'react-bootstrap/Button'

function BreakTime (props) {
  function upBreak () {
    if (props.breakTime === 60) return
    props.onUpBreak()
  }
  function downBreak () {
    if (props.breakTime === 1) return
    props.onDownBreak()
    
  }

  return (
    <section>
      <h3>Break Time</h3>
      <Button onClick={upBreak}>UP</Button>
      <p>{props.breakTime}</p>
      <Button onClick={downBreak}>DOWN</Button>
    </section>
  )
}

export default BreakTime