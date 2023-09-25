import React from 'react';
import { ListTitle, ListBox, Item, StyledList } from './Styles.styled';

const items = [
  'Heat the milk in a saucepan without bringing it to a boil. Add sugar and cocoa powder.',
  'At the same time, prepare a water bath. Melt the butter on it.',
  '"Mix" the milk mixture and already liquid butter. Mix thoroughly with a silicone spatula so that the mass becomes uniform and silky.',
  'Heat the mixture over low heat, letting it barely boil.',
  'Pour the chocolate into special containers (can be replaced with ice molds). Allow to cool and harden.',
];

const List = () => {
  return (
    <ListBox>
      <ListTitle>
        Try our chocolates today and discover the perfect balance of flavor
      </ListTitle>
      <StyledList>
        {items.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </StyledList>
    </ListBox>
  );
};

export default List;
