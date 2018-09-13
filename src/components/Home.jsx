import React from 'react'
import Videos from './videos/Videos'

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>VirtualAPT's 360˚ Videos</h1>
        <Videos />
      </div>
    )
  }
}

export default Home