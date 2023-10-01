import React from 'react';
import {
  ItemImg,
  ItemTitle,
  ItemText,
  ItemCollectionSeparator,
} from './general.styled';

const Item = ({ imageSrc, title, text, showSeparator }) => {
  return (
    <>
      <ItemImg src={imageSrc} alt="Item" width={32} />
      <ItemTitle>{title}</ItemTitle>
      <ItemText>{text}</ItemText>
      {showSeparator && (
        <ItemCollectionSeparator showSeparator={showSeparator} />
      )}{' '}
    </>
  );
};

export default Item;
