import axios from 'axios'

const KEY= "AIzaSyCzsgQhs9sU1vLsHyL0R-qYzgMNGiGT5m0"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params : {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})