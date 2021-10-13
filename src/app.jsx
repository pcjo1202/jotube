import React, { useEffect, useState } from 'react';
import './app.css';
import Topbar from './components/topbar/topbar';
import Videolist from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  const baseURL = 'https://www.googleapis.com/youtube/v3';
  const key = 'AIzaSyBwbrbNvKSa1jiMFO0zj8aHQL0kWhYJjLw';
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(
      `${baseURL}/search?part=snippet&q=아이패드&maxResults=20&key=${key}`,
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className="container">
      <Topbar />
      <Videolist videos={videos} />
    </div>
  );
}

export default App;
