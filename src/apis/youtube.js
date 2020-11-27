import axios from 'axios';


const KEY = 'AIzaSyB5xkOFZUp10ECXIGjy1hfUqlDB-Ru7wIA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});