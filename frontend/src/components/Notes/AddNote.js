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
    console.log(note)
    axios.post('/notes/', note)
      .then(res => {
        console.log('Note created: ', res.data)
      })
      .catch(error => console.error('Server error: ' + error.message))
    window.location = '/'
  }
  render () {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
            value={this.state.title}
            placeholder='Title'
            onChange={this.onChangeTitle}/>
          <input type='textarea'
            value={this.state.description}
            placeholder='Description'
            onChange={this.onChangeDescription}/>
           <button type='submit'>Add Note</button> 
        </form>
      </>
    )
  }
}

export default AddNote