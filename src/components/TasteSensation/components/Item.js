import React from 'react';
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
  return (
    <ItemStyles>
      <ImageContainer className="image_container">
        <StyledImage src={imageSrc} alt="Item" />
        <ImageContainerText>{defaultText}</ImageContainerText>
      </ImageContainer>

      <CardOverlay className="info_title">
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
