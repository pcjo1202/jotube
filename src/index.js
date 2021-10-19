import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import Youtube from './service/youtubeAPI';

const youtube = new Youtube('AIzaSyBwbrbNvKSa1jiMFO0zj8aHQL0kWhYJjLw');

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);
