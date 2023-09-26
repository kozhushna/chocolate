import React from 'react';
import Item from './Item';
import { Cards } from './general.styled';

const ItemCollection = () => {
  const data = [
    {
      imageSrc: require('../../../images/TasteSensation/desktop/Desktop_chocolate.png'),
      defaultText: 'MILK CHOCOLATE',
      lable: 'chocolate',
      hoverText:
        'Milk chocolate is a solid chocolate confectionery containing cocoa, sugar and milk. It is the most consumed type of chocolate. Chocolate was originally sold and consumed as a beverage in pre-Columbian times. Although four-fifths of all milk chocolate is sold in the United States and Europe.',
    },
    {
      imageSrc: require('../../../images/TasteSensation/desktop/Desktop_milk.png'),
      defaultText: 'MILK',
      lable: 'milk',
      hoverText:
        'Milk is a white liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals (including breastfed human infants) before they are able to digest solid food.Early-lactation milk, which is called colostrum, contains antibodies that strengthen the immune system.',
    },
    {
      imageSrc: require('../../../images/TasteSensation/desktop/Desktop_nuts.png'),
      defaultText: 'NUTS',
      lable: 'nuts',
      hoverText:
        'Almonds, pistachios, and walnuts are some types of nuts that contain healthy nutrients. When eaten as part of a nutrient-dense diet, these 9 nuts may offer benefits such as reducing your risk of heart disease. They’re a good source of fiber, healthy fats, and plant protein. Plus, they’re great on their own.',
    },
    {
      imageSrc: require('../../../images/TasteSensation/desktop/Desktop_second_chocolate.png'),
      defaultText: 'SEMI - SWEET CHOCOLATE',
      lable: 'sweet chocolate',
      hoverText:
        'Semi-sweet chocolate has a cocoa solid content of 35 to 65%. One of the best ways to gain an understanding of this type of chocolate is to compare it to a different type of chocolate. Semisweet is darker than milk chocolate. In a taste comparison, it has a slightly bitter taste whereas milk chocolate is sweeter and more mellow.',
    },
  ];

  return (
    <Cards>
      {data.map((item, index) => (
        <Item
          key={index}
          imageSrc={item.imageSrc}
          defaultText={item.defaultText}
          lable={item.lable}
          hoverText={item.hoverText}
        />
      ))}
    </Cards>
  );
};

export default ItemCollection;
