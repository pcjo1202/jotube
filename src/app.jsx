import React, { useEffect, useState } from 'react'
import './app.css'
import SideMenu from './components/side_menu/side_menu'
import Topbar from './components/topbar/topbar'
import VideoDetail from './components/videoDetail/videoDetail'
import Videolist from './components/video_list/video_list'

function App ({ youtube }) {
  const [videos, setVideos] = useState([])
  const [playVideoData, setPlayVideoData] = useState(null)

  useEffect(
    () => {
      youtube
        .mostPopular() //
        .then(items => setVideos(items))
    },
    [youtube]
  )

  function handleSearch (value) {
    youtube
      .handleSearch(value) //
      .then(items => setVideos(items))
  }

  function handleVideoDetail (video) {
    setPlayVideoData(video)
  }

  function goMainPage () {
    setPlayVideoData(null)
  }

  return (
    <div className='container'>
      <Topbar onSubmit={handleSearch} goMainPage={goMainPage} />
      <section>
        <SideMenu />
        {playVideoData && <VideoDetail video={playVideoData} />}
        <Videolist videos={videos} playvideo={handleVideoDetail} />
      </section>
    </div>
  )
}

export default App
