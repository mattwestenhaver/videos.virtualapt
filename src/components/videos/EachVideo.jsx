import React from 'react'
import noThumbnail from '../../images/coming-soon.jpg'

class EachVideo extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="each-video" key={this.props.index}>
        {this.props.video.thumbnail
          ? <a href={this.props.video.url} target="_blank">
              <img src={this.props.video.thumbnail} alt={this.props.video.title} />
            </a>
          : <a href={this.props.video.url} target="_blank">
              <img src={noThumbnail} alt='no thumbnail available' />
            </a>
        }
        <h4><a href={this.props.video.url} target="_blank">{this.props.video.title}</a></h4>
      </div>
    )
  }
}

export default EachVideo