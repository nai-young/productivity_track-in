import React from 'react'
import Button from 'react-bootstrap/Button'

function DurationTime (props) {
  function upDuration () {
    if (props.durationTime === 60) return
    props.onUpDuration()
  }
  function downDuration () {
    if (props.durationTime === 1) return
    props.onDownDuration()
    
  }
  return (
    <section>
      <h3>Session Duration</h3>
      <Button onClick={upDuration}>UP</Button>
      <p>{props.durationTime}</p>
      <Button onClick={downDuration}>DOWN</Button>
    </section>
  )
}

export default DurationTime