import React from 'react';
import Videoitem from '../video_items/video_item';
import styles from './video_list.module.css';

const Videolist = props => {
  return (
    <ul className={styles.videoList}>
      {props.videos.map(video =>
        <Videoitem key={video.id} video={video} playvideo={props.playvideo} />
      )}
    </ul>
  );
};

export default Videolist;
