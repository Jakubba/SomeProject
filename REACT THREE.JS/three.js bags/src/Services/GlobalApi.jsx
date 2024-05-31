import axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3';
const api_key = '08762d1c3dc43662ea760e359be06823';

const getTredingVideos = axios.get(movieBaseUrl + '/trending/all/day?api_key=' + api_key);

export default {
  getTredingVideos,
};
