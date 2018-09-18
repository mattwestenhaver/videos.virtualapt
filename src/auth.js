import axios from 'axios'

class AuthClient {

  constructor() {
    this.request = axios.create({
      baseURL: 'http://localhost:3001/'
      // headers: {
      //   common: {
      //     token: this.getToken()
      //   }
      // }
    })
  }

  getVideos() {
    return this.request({ method: 'Get', url: "/videos" })
      .then(response => response.data.videos)
  }

  createVideo(videoInfo) {
    return this.request({ method: 'Post', url: "/videos", data: videoInfo })
      .then(response => response.data.success)
  }

  updateVideo(videoInfo) {
    return this.request({ method: 'Patch', url: `/videos/${videoInfo._id}`, data: videoInfo })
    .then(response => {
      if(response.data.success) {
        return true
      } else {
        return false
      }
    })
  }
 
}

export default new AuthClient()
