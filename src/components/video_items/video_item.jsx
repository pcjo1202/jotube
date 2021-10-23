import React from 'react'
import styles from './video_items.module.css'

const Videoitem = ({ video, playvideo }) => {
  const onClickVideo = () => {
    playvideo(video)
  }

  return (
    <li className={styles.videoItem} onClick={event => onClickVideo(event)}>
      <img
        className={styles.item_thumbnail}
        src={video.snippet.thumbnails.medium.url}
        alt=''
      />
      <div className={styles.videoInfo}>
        <img
          className={styles.channelIcon}
          // src={}
          alt=''
        />
        <div className={styles.InfoText}>
          <h3 className={styles.videoTitle}>
            {video.snippet.title}
          </h3>
          <p className={styles.channelTitle}>
            {video.snippet.channelTitle}
          </p>
        </div>
      </div>
    </li>
  )
}

export default Videoitem
