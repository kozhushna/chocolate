import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { VideoBox } from './Styles.styled';

const videoID = "BV6-aH2C4S4";

function Video() {
  const [videoDimensions, setVideoDimensions] = useState({ width: '100%', height: '200px' });
  const [isVideoBoxVisible, setIsVideoBoxVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 768 && windowWidth < 1200) {
        setVideoDimensions({ width: '614px', height: '400px' });
      } else if (windowWidth >= 1200) {
        setVideoDimensions({ width: '600px', height: '400px' });
      } else {
        setVideoDimensions({ width: '100%', height: '200px' });
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsVideoBoxVisible(true); 
  }, []);

  const opts = {
    height: videoDimensions.height,
    width: videoDimensions.width,
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div>
      {isVideoBoxVisible && (
        <VideoBox>
          <YouTube videoId={videoID} opts={opts} />
        </VideoBox>
      )}
    </div>
  );
}

export default Video