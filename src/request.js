import Axios from "axios"

class RequestService {
  constructor() {
    this.axios = Axios.create({
      baseURL: "http://185.51.62.179:8000/",
    })
  }
  getUser(username) {
    return this.axios.get(`/users/${username}/`, { responseType: "json" })
  }
  getUserMedia(username) {
    return this.axios.get(`/users/${username}/media/`, { responseType: "json" })
  }
  getUserFollowers(username) {
    return this.axios.get(`/users/${username}/followers/`, { responseType: "json" })
  }
  getUserFollowersChange(username) {
    return this.axios.get(`/users/${username}/followers_change/`, { responseType: "json" })
  }
}

export const Request = new RequestService()