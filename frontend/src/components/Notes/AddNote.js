import React, { Component } from 'react'
import axios from 'axios'

class AddNote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: ''
    }
  }
  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const note = {
      title: this.state.title,
      description: this.state.description
    }
    axios.post('/notes/', note)
      .then(res => {
        console.log('Note created: ', res.data.title)
      })
      .catch(error => console.error('Server error: ' + error.message))
    window.location = '/'
  }
  render () {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="todos-container mt-3 mb-3 flex justify-between">
          <input type='text'
            required
            value={this.state.title}
            className='w-2/6 px-3'
            placeholder='Title'
            onChange={this.onChangeTitle}/>
          <input type='textarea'
            value={this.state.description}
            className='w-45 px-3'
            placeholder='Description'
            onChange={this.onChangeDescription}/>
           <button type='submit' className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Add Note</button> 
        </form>
      </>
    )
  }
}

export default AddNote