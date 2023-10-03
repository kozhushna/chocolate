import React, { useState } from 'react';
import { Element } from 'react-scroll';
import './styleScroll.css';
import {
  ItemStyles,
  ImageContainer,
  Info,
  CardOverlay,
  ImageContainerText,
  InfoTitle,
  InfoText,
  StyledImage,
} from './general.styled';

const Item = ({ imageSrc, defaultText, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <ItemStyles onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ImageContainer>
        <StyledImage src={imageSrc} alt="Item" />
        <ImageContainerText>{defaultText}</ImageContainerText>
      </ImageContainer>

      <CardOverlay isHovered={isHovered}>
        <Info>
          <InfoTitle>{defaultText}</InfoTitle>

          <Element name="myScrollElement" className="custom_scroll_element">
            <InfoText>{hoverText}</InfoText>
          </Element>
        </Info>
      </CardOverlay>
    </ItemStyles>
  );
};

export default Item;
