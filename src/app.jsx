import React, { useEffect, useState } from 'react';
import './app.css';
import SideMenu from './components/side_menu/side_menu';
import Topbar from './components/topbar/topbar';
import Videolist from './components/video_list/video_list';
import Videoplayer from './components/video_player/video_player';

function App() {
  // const baseURL = 'https://www.googleapis.com/youtube/v3';
  // const key = 'AIzaSyBwbrbNvKSa1jiMFO0zj8aHQL0kWhYJjLw';
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=kr&key=AIzaSyBwbrbNvKSa1jiMFO0zj8aHQL0kWhYJjLw`,
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  function handleSearch(value) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value}&maxResults=20&key=AIzaSyBwbrbNvKSa1jiMFO0zj8aHQL0kWhYJjLw`,
      requestOptions
    )
      .then(response => response.json())
      .then(result =>
        result.items.map(item => ({ ...item, id: item.id.videoId }))
      )
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }

  return (
    <div className="container">
      <Topbar onSubmit={handleSearch} />
      <section>
        <SideMenu />
        <Videolist videos={videos} />
      </section>
    </div>
  );
}

export default App;
