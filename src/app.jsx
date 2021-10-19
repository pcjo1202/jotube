import React, { useEffect, useState } from 'react'
import './app.css'
import SideMenu from './components/side_menu/side_menu'
import Topbar from './components/topbar/topbar'
import Videolist from './components/video_list/video_list'
// import Videoplayer from './components/video_player/video_player'

function App ({ youtube }) {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(items => setVideos(items))
  }, [])

  function handleSearch (value) {
    youtube
      .handleSearch(value) //
      .then(items => setVideos(items))
  }

  return (
    <div className='container'>
      <Topbar onSubmit={handleSearch} />
      <section>
        <SideMenu />
        <Videolist videos={videos} />
      </section>
    </div>
  )
}

export default App
