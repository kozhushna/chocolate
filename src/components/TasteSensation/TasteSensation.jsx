import React from 'react';
import { Container, SubTitle } from './TasteSensation.styled';
import ItemCollection from './components/ItemCollection';
import { Accent, Title } from 'App.styled';

const TasteSensation = () => {
  return (
    <>
      <Container>
        <Title>
          It all adds up to one <br /> exceptional <Accent>taste</Accent>{' '}
          SENSATION
        </Title>
        <SubTitle>
          At Simply Chocolate, we believe that the secret to exceptional
          chocolate is in the details. From the sourcing of the finest
          ingredients to the careful crafting of each individual piece, every
          step of our process adds up to one exceptional taste sensation.
        </SubTitle>
      </Container>
      <ItemCollection />
    </>
  );
};

export default TasteSensation;
