import React from 'react'
import styles from './videoDetail.module.css'

const VideoDetail = ({ video }) => {
  return (
    <div className={styles.videoPlayer}>
      <iframe
        title={`${video.snippet.title}`}
        className={styles.player}
        width='640'
        height='360'
        id='ytplayer'
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
        frameborder='0'
      />
      <div className={styles.textInfo}>
        <h3 className={styles.title}>
          {video.snippet.title}
        </h3>
        <hr />
      </div>
    </div>
  )
}

export default VideoDetail
