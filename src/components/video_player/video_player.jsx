import React from 'react';

const Videoplayer = props => {
  return (
    <iframe
      id="ytplayer"
      src={`https://www.youtube.com/embed/LKQ-18LoFQk?autoplay=1`}
      frameborder="0"
    />
  );
};

export default Videoplayer;
