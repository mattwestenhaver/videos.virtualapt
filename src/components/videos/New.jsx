import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import auth from '../../auth.js'
import Calendar from 'react-calendar';
import { Redirect } from 'react-router-dom'

class New extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      redirect: false,
      loggedIn: false
    }
  }
 
  onChange = date => this.setState({ date })

  handleFormSubmit(evt) {
    evt.preventDefault()
    console.log('submitting...')
    const videoData = {
      title: this.refs.title.value,
      url: this.refs.url.value,
      thumbnail: this.refs.thumbnail.value,
      uploadDate: this.state.date
    }
    auth.createVideo(videoData).then(success => {
      if(success) {
        console.log('video created successfully')
        setTimeout(() => {
          this.setState({ redirect: true })
        }, 5000)
      } else {
        console.log('error while saving')
      }
    })
  }

  logIn() {
    if(this.refs.password.value === process.env.REACT_APP_VAR_PASSWORD) {
      this.setState({ loggedIn: true })
      this.refs.password.value = ""
    } else {
      console.log('Incorrect Password')
    }
  }

  render() {
    return (
      this.state.redirect
      ? <Redirect to='/' />
      : this.state.loggedIn
        ? <div className="form-wrap">
            <h1>Post New Video</h1>
            <div>
              <Form onSubmit={this.handleFormSubmit.bind(this)}>
                <input placeholder='Video Title' ref='title' />
                <input placeholder='Video URL' ref='url' />
                <input placeholder='Thumbnail URL' ref='thumbnail' />
                <div className='calendar-container'>
                  <h3>Upload Date:</h3>
                  <Calendar 
                    onChange={this.onChange}
                    value={this.state.date}
                  />
                </div>
                <Button color='blue'>Submit</Button>
              </Form>
            </div>
          </div>
        : <div className="form-wrap">
            <h1>Log In</h1>
            <div>
              <Form onSubmit={this.logIn.bind(this)}>
                <input type='password' placeholder='Password' ref='password' />
                <Button color='blue'>Submit</Button>
              </Form>
            </div>
          </div>
    )
  }
}

export default New