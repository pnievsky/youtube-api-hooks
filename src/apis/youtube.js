import axios from 'axios';

const KEY = 'AIzaSyDWmb3tPg6itwCXRCaFwLGp_QmVrAD7iQM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
      part: 'snippet',
      type: 'video',
      maxResults: '5',
      key: KEY
  }
});
