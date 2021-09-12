import React from 'react'
// import Button from 'react-bootstrap/Button'

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
    <section className='break-section shadow-xl rounded-md self-center text-center p-2 w-3/12 h-sm flex justify-between flex-col align-center'>
      <h3>Break Time</h3>
      <button onClick={upBreak} className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>UP</button>
      <p className='m-2 p-6 rounded-full h-14 self-center flex justify-around items-center border-0.5 border-blue-500'>{props.breakTime}</p>
      <button onClick={downBreak} className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>DOWN</button>
    </section>
  )
}

export default BreakTime