import React, { useState } from 'react';
import Video from './Video';
import Cover from './Cover';

import { VideoWraper } from './Styles.styled';

const VideoBox = () => {
  const [showСover, setShowСover] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  const playClick = () => {
    setShowСover(!showСover);
    setShowVideo(!showVideo);
  };

  return (
    <VideoWraper>
      {showСover && <Cover onClick={playClick} />}
      {showVideo && <Video />}
    </VideoWraper>
  );
};

export default VideoBox;
