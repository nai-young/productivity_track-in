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
    <section className='shadow-xl rounded-md self-center text-center p-2 min-w-30 h-sm flex justify-between flex-col align-center'>
      <h3>Break Time</h3>
      <button onClick={upBreak} className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>UP</button>
      <p className='mt-1 mb-1 bg-blue-100 p-1 rounded-full w-1/3 h-2/6 self-center flex justify-around items-center border-0.5 border-black rounded-md'>{props.breakTime}</p>
      <button onClick={downBreak} className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>DOWN</button>
    </section>
  )
}

export default BreakTime