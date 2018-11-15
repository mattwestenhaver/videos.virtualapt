import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import auth from '../../auth.js'
import EachVideo from './EachVideo.jsx'

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
                    return <EachVideo video={video} index={index} />
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
                    return <EachVideo video={video} index={index} />
                  })
              : <div>
                  <h2>Loading Videos...</h2><br />
                </div>
            }
          </div>
        </div>
        {/* <ul>
          <li><Link to='/home/new' className='new-video'><h3>Add</h3></Link></li>
          <li> | </li>
          <li><Link to='/home/edit' className='edit-video'><h3>Edit</h3></Link></li>
        </ul> */}
      </div>
    )
  }
}

export default Videos