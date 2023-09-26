import React, { useEffect, useState } from 'react';
import { CoverImage, PlayButton } from './Styles.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';

const Cover = ({ onClick, device }) => {
  const [iconSize, setIconSize] = useState('35');
  useEffect(() => {
    device === 'mobil' ? setIconSize('35') : setIconSize('44');
  }, [device]);

  return (
    <CoverImage>
      <PlayButton type="button" onClick={onClick}>
        <Svg w={iconSize} h={iconSize} icon="play" />
      </PlayButton>
    </CoverImage>
  );
};

export default Cover;
