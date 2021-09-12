import React from 'react'
// import Button from 'react-bootstrap/Button'

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
    <section className='duration-section shadow-xl rounded-md self-center text-center p-2 w-3/12 h-sm flex justify-between flex-col align-center'>
      <h3>Session Duration</h3>
      <button onClick={upDuration} className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>UP</button>
      <p className='m-2 p-5 rounded-full  h-14 self-center flex justify-around items-center border-0.5 border-blue-500'>{props.durationTime}</p>
      <button onClick={downDuration} className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>DOWN</button>
    </section>
  )
}

export default DurationTime