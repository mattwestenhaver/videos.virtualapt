import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import auth from '../../auth.js'
import Calendar from 'react-calendar';
import { Redirect } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

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
        toast.success('Video successfully posted', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000
        })
        setTimeout(() => {
          this.setState({ redirect: true })
        }, 3000)
      } else {
        toast.error('Please fill out all the fields and try again', {
          position: toast.POSITION.TOP_CENTER
        })
      }
    })
  }

  logIn() {
    if(this.refs.password.value === process.env.REACT_APP_VAR_PASSWORD) {
      this.refs.password.value = ""
      toast.success('Login Successful', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
      })
      setTimeout(() => {
        this.setState({ loggedIn: true })
      }, 2000)
    } else {
      this.refs.password.value = ""
      toast.error('Incorrect Password. Please try again.', {
        position: toast.POSITION.TOP_CENTER
      })
    }
  }

  render() {
    return (
      this.state.redirect
      ? <Redirect to='/' />
      : this.state.loggedIn
        ? <div className="form-wrap">
            <h2>Post New Video</h2>
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
                <ToastContainer />
              </Form>
            </div>
          </div>
        : <div className="login-wrap">
            <h1>Login to Post</h1>
            <div>
              <Form onSubmit={this.logIn.bind(this)}>
                <input type='password' placeholder='Password' ref='password' />
                <Button color='blue'>Submit</Button>
                <ToastContainer />
              </Form>
            </div>
          </div>
    )
  }
}

export default New