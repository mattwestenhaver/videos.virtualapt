import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import noThumbnail from '../../images/coming-soon.jpg'
import auth from '../../auth.js'

class Videos extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      filter: 'date'
    }
  }

  loadVideos() {
    auth.getVideos().then(response => {
      this.setState({
        videos: response
      })
    })
  }

  nameFilter() {
    this.setState({ filter: 'name' })
  }

  dateFilter() {
    this.setState({ filter: 'date' })
  }

  componentDidMount() {
    this.loadVideos()
  }
  render() {
    return (
      <div>
        <div className="videos-container">
          <div className="filter">
            <Button onClick={this.nameFilter.bind(this)}>Name</Button> | <Button onClick={this.dateFilter.bind(this)}>Upload Date</Button>
          </div>
          <div className="videos-row">
            {this.state.videos.length > 0
              ? this.state.filter === 'name'
                ? this.state.videos.sort((a,b) => {
                    var videoA = a.title.toLowerCase()
                    var videoB = b.title.toLowerCase()
                    if (videoA < videoB) {
                      return -1
                    } else if (videoA > videoB) {
                      return 1
                    } else {
                      return 0
                    }
                  }).map((video, index) => {
                    return (
                      <div className="each-video" key={index}>
                        {video.thumbnail
                          ? <a href={video.url} target="_blank"><img src={video.thumbnail} alt={video.title} /></a>
                          : <img src={noThumbnail} alt='no thumbnail available' />
                        }
                        <h4><a href={video.url} target="_blank">{video.title}</a></h4>
                      </div>
                    )
                  })
                : this.state.videos.sort((a,b) => {
                    var videoA = a.uploadDate
                    var videoB = b.uploadDate
                    if (videoA < videoB) {
                      return 1
                    } else if (videoA > videoB) {
                      return -1
                    } else {
                      return 0
                    }
                  }).map((video, index) => {
                    return (
                      <div className="each-video" key={index}>
                        {video.thumbnail
                          ? <a href={video.url} target="_blank"><img src={video.thumbnail} alt={video.title} /></a>
                          : <a href={video.url} target="_blank"><img src={noThumbnail} alt='no thumbnail available' /></a>
                        }
                        <h4><a href={video.url} target="_blank">{video.title}</a></h4>
                      </div>
                    )
                  })
              : <div>
                  <h2>Loading Videos...</h2><br />
                </div>
            }
          </div>
        </div>
        {/* <ul>
          <li>
            <Link to='/home/new' className='new-video'><h3>Add</h3></Link>
          </li>
          <li> | </li>
          <li>
            <Link to='/home/edit' className='edit-video'><h3>Edit</h3></Link>
          </li>
        </ul> */}
      </div>
    )
  }
}

export default Videos