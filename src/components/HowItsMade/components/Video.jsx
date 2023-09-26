import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { VideoBox } from './Styles.styled';
import { ButtonClose } from 'components/ButtonIcon/ButtonClose';

const videoID = 'BV6-aH2C4S4';

const Video = ({ device, action, isModalOpen }) => {
  const [videoDimensions, setVideoDimensions] = useState({
    width: '100%',
    height: '200px',
  });
  const [isVideoBoxVisible, setIsVideoBoxVisible] = useState(false);

  useEffect(() => {
    if (device === 'table') {
      setVideoDimensions({ width: '614px', height: '400px' });
    } else if (device === 'desktop') {
      setVideoDimensions({ width: '600px', height: '400px' });
    } else {
      setVideoDimensions({ width: '100%', height: '200px' });
    }
  }, [device]);

  useEffect(() => {
    if (!isModalOpen) {
      setIsVideoBoxVisible(false);
    }
  }, [isModalOpen]);

  useEffect(() => {
    setIsVideoBoxVisible(true);
  }, []);

  const opts = {
    height: videoDimensions.height,
    width: videoDimensions.width,
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <VideoBox>
      {device === 'mobil' && <ButtonClose action={action} />}
      {isVideoBoxVisible && <YouTube videoId={videoID} opts={opts} />}
    </VideoBox>
  );
};

export default Video;
