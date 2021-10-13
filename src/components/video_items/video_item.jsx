import React from 'react';

const Videoitem = props => {
  return (
    <li className="videoItem">
      <a href="#" className="item_thumbnail">
        <img src={props.video.snippet.thumbnails.medium.url} alt="" />
      </a>
      <div className="video-info">
        <a href="" className="channel-icon">
          <img src="" alt="😃" />
        </a>
        <h3 className="item_title">
          {props.video.snippet.title}
        </h3>
      </div>
    </li>
  );
};

export default Videoitem;
