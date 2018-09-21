import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import auth from '../../auth.js'
import Calendar from 'react-calendar';
import { Redirect } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

var videoArray = []

class Edit extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentVideo: null,
      videoTitle: null,
      videoUrl: null,
      videoThumbnail: null,
      videos: [],
      date: null,
      redirect: false,
      loggedIn: false
    }
  }
 
  onChange = date => this.setState({ date })

  handleChange = (e, { name, value }) => {
    this.setState({ 
      [name]: value,
      videoTitle: this.state.videos.filter(video => video._id === value)[0].title,
      videoUrl: this.state.videos.filter(video => video._id === value)[0].url,
      videoThumbnail: this.state.videos.filter(video => video._id === value)[0].thumbnail,
      date: new Date(this.state.videos.filter(video => video._id === value)[0].uploadDate)
    })
  }

  textChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    const videoData = {
      title: this.state.videoTitle,
      url: this.state.videoUrl,
      thumbnail: this.state.videoThumbnail,
      uploadDate: this.formatDate(this.state.date),
      _id: this.state.currentVideo
    }
    console.log(videoData)
    auth.updateVideo(videoData).then(success => {
      if(success) {
        toast.success('Video successfully updated.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000
        })
        setTimeout(() => {
          this.setState({ redirect: true })
        }, 3000)
      } else {
        toast.error('There was an error while updating. Please try again.', {
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

  populateVideos() {
    auth.getVideos().then(response => {
      this.setState({ videos: response })
      videoArray = []
      response.forEach(video => {
        videoArray.push({ text: video.title, value: video._id, key: video._id })
      })
      return videoArray
    })
  }

  componentDidMount() {
    this.populateVideos()
  }

  render() {
    return(
      this.state.redirect
      ? <Redirect to='/home' />
      : this.state.loggedIn
        ? <div className="form-wrap">
            <h2>Edit Video</h2>
            <div>
              <Form onSubmit={this.handleFormSubmit.bind(this)}>
                <Form.Select fluid label='Choose Video' options={videoArray} value={videoArray.id} placeholder='Choose Video' name='currentVideo' onChange={this.handleChange} />
                {this.state.videoTitle
                  ? <div>
                      <hr />
                      <input value={this.state.videoTitle} placeholder='Title' onChange={this.textChange} ref='title' name='videoTitle' />
                      <input value={this.state.videoUrl} placeholder='Video URL' onChange={this.textChange} ref='url' name="videoUrl" />
                      <input value={this.state.videoThumbnail} placeholder='Thumbnail URL' onChange={this.textChange} ref='thumbnail' name="videoThumbnail" />
                      <div className='calendar-container'>
                        <h3>Upload Date:</h3>
                        <Calendar 
                          onChange={this.onChange}
                          value={new Date(this.state.date)}
                        />
                      </div>
                      <Button color='blue'>Submit</Button>
                    </div>
                  : null
                }
                <ToastContainer />
              </Form>
            </div>
          </div>
        : <div className="login-wrap">
            <h1>Login to Edit</h1>
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

export default Edit