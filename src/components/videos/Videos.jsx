import React from 'react'
import List from './List.jsx'
import noThumbnail from '../../images/coming-soon.jpg'

class Videos extends React.Component {
  render() {
    return (
      <div>
        <div className="videos-container">
          <div className="videos-row">
            {List.videos().sort((a,b) => {
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
                    ? <a href={video.link} target="_blank"><img src={video.thumbnail} alt={video.title} /></a>
                    : <img src={noThumbnail} alt='no thumbnail available' />
                  }
                  <h4><a href={video.link} target="_blank">{video.title}</a></h4>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Videos