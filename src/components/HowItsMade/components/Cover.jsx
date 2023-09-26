import React from 'react';
import { CoverImage, PlayButton } from './Styles.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';

const Cover = ({ onClick }) => {
  return (
    <CoverImage>
      <PlayButton type="button" onClick={onClick}>
        <Svg w="44" h="44" icon="play" />
      </PlayButton>
    </CoverImage>
  );
};

export default Cover;
