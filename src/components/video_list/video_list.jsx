import React from 'react';
import Videoitem from '../video_items/video_item';

const Videolist = props => {
  return (
    <ul className="videoList">
      {props.videos.map(video => <Videoitem key={video.id} video={video} />)}
    </ul>
  );
};

export default Videolist;
