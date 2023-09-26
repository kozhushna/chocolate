import React, { useState, useEffect } from 'react';
import Video from './Video';
import Cover from './Cover';

import { VideoWraper } from './Styles.styled';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal/Modal';

const VideoBox = () => {
  const [showСover, setShowСover] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [device, setDevice] = useState('mobil');
  const { isModalOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 768 && windowWidth < 1200) {
        setDevice('table');
        closeModal();
      } else if (windowWidth >= 1200) {
        setDevice('desktop');
        closeModal();
      } else {
        setDevice('mobil');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [closeModal]);

  const playClick = () => {
    setShowСover(!showСover);
    setShowVideo(!showVideo);
  };

  return (
    <VideoWraper>
      {showСover && (
        <Cover
          device={device}
          onClick={device === 'mobil' ? openModal : playClick}
        />
      )}
      {showVideo && <Video device={device} />}

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Video
            device={device}
            action={closeModal}
            isModalOpen={isModalOpen}
          />
        </Modal>
      )}
    </VideoWraper>
  );
};

export default VideoBox;
