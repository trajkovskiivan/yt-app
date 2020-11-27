import React, {useState, useEffect} from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
// import youtube from '../apis/youtube';
import useVideos from '../hooks/useVideos';


const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('programming');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos])
    // setSelectedVideo(response.data.items[0]);



    return (
        <div className='ui container'>
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList
                            videos={videos}
                            onVideoSelect={setSelectedVideo}
                        // onVideoSelect={(video) => setSelectedVideo(video)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );


}

export default App;














/*
Before the custom hooks

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onTermSubmit('buildings')
    }, [])

    const onTermSubmit = async (term) => {
        console.log(term);
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

*/