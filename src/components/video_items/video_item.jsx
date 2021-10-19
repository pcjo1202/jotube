import React from 'react'
import styles from './video_items.module.css'

const Videoitem = props => {
  const onClickVideo = () => {
    props.playvideo(props.video.id)
  }

  return (
    <li className={styles.videoItem} onClick={event => onClickVideo(event)}>
      <img
        className={styles.item_thumbnail}
        src={props.video.snippet.thumbnails.medium.url}
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
            {props.video.snippet.title}
          </h3>
          <p className={styles.channelTitle}>
            {props.video.snippet.channelTitle}
          </p>
        </div>
      </div>
    </li>
  )
}

export default Videoitem
