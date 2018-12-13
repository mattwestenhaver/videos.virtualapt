import React from 'react'
// import { Link } from 'react-router-dom'
import { Button, Form, Input } from 'semantic-ui-react'
import auth from '../../auth.js'
import EachVideo from './EachVideo.jsx'

class Videos extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      filter: 'date',
      videoSearch: '',
      results: []
    }
  }

  searchVideos(e, { name, value }) {
    var searchResults = []
    this.state.videos.forEach(video => {
      if(video.title.toLowerCase().includes(value !== '' ? value.toLowerCase() : value)) {
        searchResults = [...searchResults, video]
      }
    })
    this.setState({ [name]: value, results: searchResults })
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
    
    const { videoSearch } = this.state

    return (
      <div>
        <div className="videos-container">
          <div className="filter">
            <Button onClick={this.nameFilter.bind(this)}>Name</Button> | <Button onClick={this.dateFilter.bind(this)}>Upload Date</Button>
          </div>
          <div className="search-input">
            <Form.Field control={Input} name='videoSearch' value={videoSearch} placeholder='Search...' onChange={this.searchVideos.bind(this)} />
          </div>
          <div className="videos-row">
            {this.state.videoSearch === null || this.state.videoSearch === ''
              ? this.state.videos.length > 0
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
                        return <EachVideo video={video} index={index} key={video._id} />
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
                        return <EachVideo video={video} index={index} key={video._id} />
                      })
                  : <div>
                      <h2>Loading Videos...</h2><br />
                    </div>
              : this.state.results.length > 0
                ? this.state.filter === 'name'
                  ? this.state.results.sort((a,b) => {
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
                      return <EachVideo video={video} index={index} key={video._id} />
                    })
                  : this.state.results.sort((a,b) => {
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
                      return <EachVideo video={video} index={index} key={video._id} />
                    })
                : <div>
                    <h2>No results match your search criteria...</h2><br />
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