import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { animateScroll } from 'react-scroll';
import './styleScroll.css';
import {
  ItemStyles,
  ImageContainer,
  Info,
  CardOverlay,
  ImageContainerText,
  InfoLabelName,
  InfoLabelBenefits,
  InfoTitle,
  InfoText,
  LabelContainer,
  StyledImage,
} from './general.styled';

const Item = ({ imageSrc, lable, defaultText, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    animateScroll.scrollTo('myScrollElement');
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

          <LabelContainer>
            <InfoLabelName>{lable}</InfoLabelName>
            <InfoLabelBenefits>the benefits</InfoLabelBenefits>
          </LabelContainer>

          <Element name="myScrollElement" className="custom_scroll_element">
            <InfoText>{hoverText}</InfoText>
          </Element>
        </Info>
      </CardOverlay>
    </ItemStyles>
  );
};

export default Item;
