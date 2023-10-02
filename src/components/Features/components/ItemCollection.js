import React from 'react';
import Item from './Item';
import chocolateIcon from '../../../images/Features/chocolateIcon.svg';
import coinIcon from '../../../images/Features/Coin.svg';
import spoon from '../../../images/Features/spoon.svg';

import { CollectionList, CollectionListItem } from './general.styled';

const ItemCollection = () => {
  const data = [
    {
      imageSrc: chocolateIcon,
      title: 'Unsurpassed taste',
      text: ' Crafted with the finest quality cocoa beans and a dedication to perfection, each bite is a decadent experience that simply cannot be matched. Savor the richness and complexity of our Unsurpassed Taste and discover a new level of chocolate bliss.',
      showSeparator: true,
    },
    {
      imageSrc: coinIcon,
      title: 'Affordable price',
      text: 'Indulge in high-quality chocolate without breaking the bank with Simply Chocolates selection of affordable treats. Enjoy mouth-watering truffles and velvety chocolate bars without sacrificing taste or quality. Browse our selection and indulge in affordable luxury today.',
      showSeparator: true,
    },
    {
      imageSrc: spoon,
      title: 'Own production',
      text: 'We take pride in our own production process, ensuring that every step is carefully crafted to perfection. From selecting the finest ingredients to handcrafting each piece, our attention to detail is evident in every bite.',
      showSeparator: false,
    },
  ];

  return (
    <CollectionList>
      {data.map((item, index) => (
        <CollectionListItem key={index}>
          <Item
            imageSrc={item.imageSrc}
            title={item.title}
            text={item.text}
            showSeparator={(item.showSeparator && index === 0) || index === 1}
          />
        </CollectionListItem>
      ))}
    </CollectionList>
  );
};

export default ItemCollection;
