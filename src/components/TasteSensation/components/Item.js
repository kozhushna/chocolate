import React, { useState } from 'react';
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
} from './general.styled';

const Item = ({ imageSrc, lable, defaultText, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ItemStyles
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ImageContainer>
        <img src={imageSrc} alt="Item" />
        <ImageContainerText>{defaultText}</ImageContainerText>
      </ImageContainer>

      <CardOverlay isHovered={isHovered}>
        <Info>
          <InfoTitle>{defaultText}</InfoTitle>

          <LabelContainer>
            <InfoLabelName>{lable}</InfoLabelName>
            <InfoLabelBenefits>the benefits</InfoLabelBenefits>
          </LabelContainer>

          <InfoText>{hoverText}</InfoText>
        </Info>
      </CardOverlay>
    </ItemStyles>
  );
};

export default Item;
